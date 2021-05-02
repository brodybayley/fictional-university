<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '+xVz943LWxKr4GWOet/oA9BdjpsymfypMlR8LA0khM26rw1VXMSeC5mhlOzNp7oA/i+qWPGVi++VsV65NhBlfQ==');
define('SECURE_AUTH_KEY',  'y47Ovak3HXuLJlnYWXnA73shHzdk+razNTxNtlmbjDaxcnB4EcfJgfWKyTPyGOR7GbyvjnE/WY19F/5+10HiFg==');
define('LOGGED_IN_KEY',    'VZj3faPgOh/t7voG/ciEA5bZlKeL57e4+luYGReT+MtyMO7eWlgwC4U3K8b6yA0HcyWoTW6S2qkI9mVhto84GQ==');
define('NONCE_KEY',        'aBMaxRVJjdoFLZbFHAdNoY9s7ZIlOL6p8nQNC2npYtewCVtZg9uS0n1XDVMpLcSXYkb23pDwz4iDTiz8wmQx9g==');
define('AUTH_SALT',        'Et8P3feqj1ZwFmup3Rk7LuS+R+TWRgUEpkB7Qdba+wF+ulLJLCED5VZOi9glObL9CZ4levqPZNDlhCjfm/hH1Q==');
define('SECURE_AUTH_SALT', '9PA8e0YUQLL6mINKhNRYvRVHxFaYodyvq9S3xZAAjHhOtcUq5TGPqQMh7QjrlNZPNUhQKkBlK/cSTD3n+/foVw==');
define('LOGGED_IN_SALT',   'HsmuVxrWTqY4bKKgi+bsYX4TPDCoeWr477wPrKh0WxZJDJuAf8HHmlI8gzqy66J1owNKC0y989y/eb3mz4x6iA==');
define('NONCE_SALT',       'FRud7He3Vu/MYfA66kxK+GYC7tnZ9cge0xO5hk+UtiPq81u8LlxLDs0ZpHMYypCY01/1Tlslo2mq9k4TgB9I1A==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
