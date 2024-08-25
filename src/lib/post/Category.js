import Post from '$lib/post/Post.js';

const symbol = Symbol('Category initialization');

export default class Category {
	static #categories = new Map();
	static #root = new Category(''); // 순서 중요. 모든 static 필드가 초기화 된 후 초기화 되어야 함
	/** @type {string} */
	#absolutePath;
	/** @type {Map<string, Category>} */
	#childCategories = new Map();
	/** @type {Map<string, Post>} */
	#posts = new Map();
	#serialized;

	/**
	 * 카테고리 생성자
	 * @param {string} absolutePath 접근 가능한 절대 경로
	 */
	constructor(absolutePath) {
		Category.#categories.set(absolutePath, this);
		this.#absolutePath = absolutePath;
	}

	get name() {
		return this.#absolutePath.split('/').at(-1);
	}

	get absolutePath() {
		return this.#absolutePath;
	}

	get allChildCategories() {
		let allChildCategories = [];

		for (const childCategory of this.#childCategories.values()) {
			allChildCategories.push(childCategory);
			allChildCategories.push(...childCategory.allChildCategories);
		}

		return allChildCategories;
	}

	/**
	 * 자식 카테고리 목록 반환
	 * @returns {Category[]}
	 */
	get childCategories() {
		return Array.from(this.#childCategories.values());
	}

	/**
	 * 자신의 포스트 목록 반환
	 * @returns {Post[]}
	 */
	get posts() {
		return Array.from(this.#posts.values());
	}

	/**
	 * 자신과 하위 카테고리의 포스트 반환
	 * @returns {Post[]} 포스트 목록
	 */
	get allPosts() {
		const posts = Array.from(this.#posts.values());

		for (const childCategory of this.#childCategories.values()) {
			posts.push(...childCategory.allPosts);
		}

		return posts;
	}

	/**
	 * 최상위 경로를 찾을 때는 공백 문자열을 인자로 넘겨주세요.
	 * @param {string} absolutePath
	 * @returns {Category | undefined}
	 */
	static getCategory(absolutePath) {
		return this.#categories.get(absolutePath);
	}

	static [symbol]() {
		const markdowns = import.meta.glob('/static/**/*.md', {
			// eager: true,
			query: '?raw',
			import: 'default'
		});

		Object.entries(markdowns).forEach(([path, markdownAsync]) => {
			const absolutePath = path
				.replace(/^\/static/, '') // 스태틱 경로 제거
				.replace(/\.md$/, ''); // 확장자 제거
			this.#initCategories({ absolutePath, markdownAsync });
		});
	}

	static #initCategories(
		{ absolutePath, markdownAsync },
		{ category = this.#root, index = 0 } = {}
	) {
		const splitPath = absolutePath.split('/');
		const absolutePaths = splitPath;
		const categoryAbsolutePath = splitPath.slice(0, index + 1).join('/');
		if (absolutePaths.length > index + 1) {
			if (!this.#categories.has(categoryAbsolutePath))
				category.addChildCategory(new Category(categoryAbsolutePath));
			const targetCategory = this.#categories.get(categoryAbsolutePath);

			this.#initCategories(
				{ absolutePath, markdownAsync },
				{ category: targetCategory, index: index + 1 }
			);
		} else {
			const post = new Post({ absolutePath, markdownAsync });
			category.addPost(post);
		}
	}

	/**
	 * 카테고리 추가
	 * @param {Category} category
	 */
	addChildCategory(category) {
		this.#childCategories.set(category.#absolutePath, category);
	}

	/**
	 * 포스트 추가
	 * @param {Post} post 추가할 포스트
	 */
	addPost(post) {
		this.#posts.set(post.absolutePath, post);
	}

	async toSerialize() {
		if (this.#serialized) {
			return this.#serialized;
		}

		const postsPromise = Promise.all(this.allPosts.map((post) => post.toSerialize()));
		const childCategoriesPromise = Promise.all(
			this.childCategories.map((category) => category.toSerialize())
		);

		const [posts, childCategories] = await Promise.all([postsPromise, childCategoriesPromise]);

		posts.sort((a, b) => {
			return new Date(b.data.gitLog.at(-1).datetime) - new Date(a.data.gitLog.at(-1).datetime);
		});

		return (this.#serialized = {
			name: this.name,
			absolutePath: this.#absolutePath,
			childCategories: childCategories,
			allPosts: posts
		});
	}
}

Category[symbol]();
