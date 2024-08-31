import markdownProcessAsync from '$lib/plugin/markdown.js';

export default class Post {
	static #posts = new Map();
	#serialized;
	#markdownAsync;
	#absolutePath;

	/**
	 * Post 클래스의 생성자입니다. 이 생성자는 포스트의 제목, 내용, 작성 날짜, 그리고 슬러그를 인자로 받아 Post 인스턴스를 생성합니다.
	 * @param {string} absolutePath 포스트의 슬러그
	 * @param {promise<object>} markdownAsync 마크다운 원본
	 */
	constructor({ absolutePath, markdownAsync }) {
		Post.#posts.set(absolutePath, this);
		this.#absolutePath = absolutePath;
		this.#markdownAsync = markdownAsync;
	}

	/**
	 * 포스트의 카테고리를 반환
	 * @param absolutePath
	 * @returns {Post | undefined}
	 */
	static getPosts(absolutePath) {
		return Post.#posts.get(absolutePath);
	}

	get absolutePath() {
		return this.#absolutePath;
	}

	async toSerialize() {
		if (this.#serialized) {
			return this.#serialized;
		}

		const markdownPromise = this.#markdownAsync();
		const markdownVFile = await markdownPromise;
		const htmlFilePromise = markdownProcessAsync({
			markdown: markdownVFile.default
		});

		return (this.#serialized = {
			absolutePath: this.#absolutePath,
			gitLog: markdownVFile.gitLog,
			...(await htmlFilePromise)
		});
	}
}
