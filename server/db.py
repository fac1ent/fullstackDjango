import psycopg2
from server.server.config import HOST, USER, PASSWORD, NAME

# Подключение к базе данных
try:
    db =  psycopg2.connect(
        host=HOST,
        user=USER,
        password=PASSWORD,
        database=NAME
    )

    print('Connected to MySQL database!')

    create_table_query = "CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, " \
                         "name VARCHAR(255), " \
                         "email VARCHAR(255), " \
                         "password VARCHAR(255))"

    cursor = db.cursor()

    cursor.execute(create_table_query)
    db.commit()

    if cursor.lastrowid:
        print('Users table created successfully!')
    else:
        print('Table already exists or an error occurred.')

    cursor.close()
    db.close()

except  psycopg2.Error as e:
    print(f"Error: {e}")

HOST = 'localhost'
USER = 'fac1ent'
PASSWORD  = 'anezod41501330513A'
NAME = 'reg'
SECRET_KEY = 'django-insecure-)=y2=g9m15wug0l56)m*59mfg3_jh-u&djeopb1@oldkb%59rh'
