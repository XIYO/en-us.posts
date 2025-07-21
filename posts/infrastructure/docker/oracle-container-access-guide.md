---
title: Oracle Container Access Guide
tags:
  - docker
  - oracle
  - database
  - guide
  - connection
  - troubleshooting
---

# Oracle Container Access Guide

## IntelliJ Ultimate DataGrip Connection Setup

### Connect to Oracle with DataGrip

1. Launch DataGrip and add a new data source (+)
2. Select Oracle
3. Enter the following settings:

**Basic settings:**
- Host: `localhost`
- Port: `1521`
- SID: `FREE`
- User: `system`
- Password: `oracle123`

**When using Service Name:**
- Connection type: `Service name`
- Service name: `FREEPDB1`

**Advanced settings:**
- Driver: Oracle JDBC Driver auto-download
- URL: `jdbc:oracle:thin:@localhost:1521/FREEPDB1`

4. Click "Test Connection" to verify the connection
5. Click "OK" to save

## Troubleshooting

### Connection refused / IO Error

**Symptoms:** Connection itself fails in DataGrip, not an Oracle error (ORA-)

**Cause:** Unable to access Oracle server due to Docker or container issues

**Solutions:**

1. Verify Docker Desktop is running:
```bash
docker version
```
If Docker is not running, start Docker Desktop.

2. Check Oracle container status:
```bash
docker ps -a | grep oracle-free
```

3. Actions based on container status:
   - **Container not found**: Create new one (see "When container is missing or stopped" below)
   - **STATUS: Exited**: Run `docker start oracle-free` and wait 5 minutes
   - **STATUS: Up**: Check port mapping

4. Verify port mapping:
```bash
docker port oracle-free
```
If output is not `1521/tcp -> 0.0.0.0:1521`, recreate the container.

### Network adapter could not establish the connection

**Symptoms:** DataGrip attempts network connection but fails

**Cause:** Firewall, incorrect host/port settings, or Oracle listener not working

**Solutions:**

1. Use 127.0.0.1 instead of localhost:
   - Host: `127.0.0.1` (instead of localhost)
   - Port: `1521`

2. Check Oracle listener status:
```bash
docker exec oracle-free lsnrctl status
```
If listener is not working, see "ORA-12541" solution above

3. Verify port mapping if using different port:
```bash
docker ps | grep oracle-free
```
Check actual port mapping in PORTS column (e.g., 1522->1521)

### ORA-01017: invalid username/password

**Cause:** The entered password doesn't match the password set in the database.

**Solution:** If you don't remember the password, reset it with the following command:

Reset password for SYSTEM and SYS accounts:
```bash
docker exec -it oracle-free sqlplus / as sysdba -c "ALTER USER system IDENTIFIED BY oracle123; ALTER USER sys IDENTIFIED BY oracle123;"
```

How to reset password for specific user accounts:

Format: `ALTER USER username IDENTIFIED BY newpassword;`

Example 1 - Change myapp user's password to myapp123:
```bash
docker exec -it oracle-free sqlplus / as sysdba -c "ALTER USER myapp IDENTIFIED BY myapp123;"
```

Example 2 - Change scott user's password to tiger:
```bash
docker exec -it oracle-free sqlplus / as sysdba -c "ALTER USER scott IDENTIFIED BY tiger;"
```

### ORA-12541: TNS:no listener

**Cause:** Oracle listener service has stopped or is not responding.

**Solution:** Restart the listener:

```bash
docker exec -it oracle-free bash -c "lsnrctl stop && lsnrctl start"
```

### When container is missing or stopped

**Cause:** Docker container doesn't exist or is in stopped state.

**Solution:** First check container status and take appropriate action:

Check container status:
```bash
docker ps -a | grep oracle-free
```

If container is stopped (STATUS: Exited):
```bash
docker start oracle-free
```

If container doesn't exist, create new one:
```bash
docker run -d --name oracle-free -p 1521:1521 -p 5500:5500 -e ORACLE_PWD=oracle123 container-registry.oracle.com/database/free:latest
```

### Cannot connect after container restart

**Cause:** Database may not start automatically when Oracle container restarts.

**Solution:** Wait for database to be ready or start it manually:

Check logs (verify ready message):
```bash
docker logs oracle-free | grep "DATABASE IS READY"
```

Manually start database:
```bash
docker exec -it oracle-free bash -c "echo 'STARTUP;' | sqlplus / as sysdba"
```