<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Connect to MySQL
$conn = new mysqli("localhost", "root", "", "jobhunt_db");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_GET['query'])) {
    $search = $conn->real_escape_string($_GET['query']);
    $sql = "SELECT * FROM jobs WHERE title LIKE '%$search%' OR location LIKE '%$search%'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "<h3>" . $row['title'] . "</h3>";
            echo "<p>" . $row['company'] . " - " . $row['location'] . "</p><hr>";
        }
    } else {
        echo "No jobs found.";
    }
} else {
    echo "Please enter a search term.";
}

$conn->close();
?>
