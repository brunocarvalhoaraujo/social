<?php
session_start();
//verificando ou criando o Diretorio
// var_dump($_SESSION);

$dirUploadImgs = './img';
$pastaMercado = $_SESSION['id_mercado'].'/';

$myPatch = $dirUploadImgs.'/'.$pastaMercado;

if(!is_dir($myPatch)){
  mkdir($myPatch, 0777, true);
}




// var_dump($_FILES['imagemProduto']);
// exit;
if(!empty($_FILES['imagemProduto'])){
    $extencao= explode('.', $_FILES['imagemProduto']['name']);
    $ext =end($extencao);
    
    $width = 700;
    $height = 700;
    // Obtendo o tamanho original
    list($width_orig, $height_orig) = getimagesize($_FILES['imagemProduto']['tmp_name']);
    // Calculando a proporção
    $ratio_orig = $width_orig/$height_orig;
    if ($width/$height > $ratio_orig) {
        $width = $height*$ratio_orig;
    } else {
        $height = $width/$ratio_orig;
    }
    $novoNomeArq = md5($_FILES['imagemProduto']['name'].date('h-i-s')).'.'.$ext;
    
    // O resize propriamente dito. Na verdade, estamos gerando uma nova imagem.
    $image_p = imagecreatetruecolor($width, $height);
    
        $path = $_FILES['imagemProduto']['tmp_name'];
        switch(mime_content_type($path)) {
          case 'image/png':
            $image = imagecreatefrompng($path);
            imagealphablending($image_p, false);
            imagesavealpha($image_p, true);
            $transparent = imagecolorallocatealpha($image_p, 255, 255, 255, 127);
            imagefilledrectangle($image_p, 0, 0, $width, $height, $transparent);

            imagecopyresampled($image_p, $image, 0, 0, 0, 0, $width, $height, $width_orig, $height_orig);
            imagepng($image_p, $myPatch.$novoNomeArq, 9);
            break;
          case 'image/gif':
            $image = imagecreatefromgif($path);
            imagecopyresampled($image_p, $image, 0, 0, 0, 0, $width, $height, $width_orig, $height_orig);
            imagejpeg($image_p, $myPatch.$novoNomeArq, 75); 
            break;
          case 'image/jpeg':
            $image = imagecreatefromjpeg($path);
            imagecopyresampled($image_p, $image, 0, 0, 0, 0, $width, $height, $width_orig, $height_orig);
            imagejpeg($image_p, $myPatch.$novoNomeArq, 75);        
            break;
          case 'image/bmp':
            $image = imagecreatefrombmp($path);
            imagecopyresampled($image_p, $image, 0, 0, 0, 0, $width, $height, $width_orig, $height_orig);
            imagebmp($image_p, $myPatch.$novoNomeArq, 75);        
            break;
          default:
            $image = null; 
        }
}
// var_dump($_POST);
foreach ($_POST as $key => $value) {
    if(empty($value)){
        $msg = array('erro', "Vazio: {$key}");
        echo(json_encode($msg,true));
        exit();
    }
}

  include('../configs/conexao.php');
    
  $slq ="INSERT INTO `produtos` (`mercado`, `codigodebarra`,`nome`,`tamanho`,`marca`,`foto`,`setor`) 
              VALUES (:mercado, :codigodebarra, :nome, :tamanho, :marca, :foto, :setor)";
  $stmt = $pdo->prepare($slq);
  $stmt->bindValue(':mercado', $_SESSION['id_mercado']);
  $stmt->bindValue(':codigodebarra', $_POST['codBarra']);
  $stmt->bindValue(':nome', $_POST['nomeProduto']);
  $stmt->bindValue(':tamanho', $_POST['tamanhoProduto']);
  $stmt->bindValue(':marca', $_POST['marcaProduto']);
  $stmt->bindValue(':foto', $novoNomeArq);
  $stmt->bindValue(':setor', $_POST['setorProduto']);
  if($stmt->execute()){
  $msg = array('sucesso', 'produto cadastrado.');
  echo(json_encode($msg, true));
  }else{
  $msg = array('erro', 'O produto já existe');
  echo(json_encode($msg, true)); 
}





