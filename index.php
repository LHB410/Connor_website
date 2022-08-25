<?php include_once("index.html"); ?>

<?php
require 'vendor/autoload.php';

use Zara4\API\Client;
use Zara4\API\ImageProcessing\LocalImageRequest;
use Zara4\API\ImageProcessing\ProcessedImage;


$apiClient = new Client(getenv("ZARA_4_API_CLIENT_ID"), getenv("ZARA_4_API_CLIENT_SECRET"));
$originalImage = new LocalImageRequest("images/bio pic.jpg", "images/alt_speaker.jpg", "images/bw_bio_pic.jpg", "images/jazz.jpg", "images/jazz2.jpg", "images/jazz3.jpg", "images/wide.jpg");
$processedImage = $apiClient->processImage($originalImage);
$apiClient->downloadProcessedImage($processedImage, "images/output.jpg");



