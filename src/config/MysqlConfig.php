<?php

class MysqlConfig
{

    private static $servername = "localhost";
    private static $username = "root";

    private static $password = "";

    private static $database = "Web2_Database";
    private static $port = 3306;
    public static function getConnection()
    {

        try {
            //Tạo connection
            $conn = new PDO(
                "mysql:host=" . self::$servername . ";
              port=" . self::$port . ";
              dbname=" . self::$database,
                self::$username,
                self::$password,
            );

            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch (PDOException $e) {
            echo "Kết nối không thành công: " . $e->getMessage();
        }
    }
}
