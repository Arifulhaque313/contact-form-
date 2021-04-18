<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="contact-box">


        <form action="" name="form" id="form" method="post" >

            


            <input type="email" name="email" id="email" placeholder="Enter your email " class="input-field">


            <input type="password" name="password" id="password" placeholder="Enter your password " class="input-field">

            <button type="submit" name="login">submit</button>



        </form>

        <?php

            session_start();
            if(isset($_POST['login'])){
                
                $connection = mysqli_connect("localhost","root","");
                $db = mysqli_select_db($connection,"cform2");
                $query = "select * from users where email='$_POST[email]'";
            
                $query_run = mysqli_query($connection,$query);   

                while($row = mysqli_fetch_assoc($query_run)){
                    if($row['email']==$_POST['email']){
                        if($row['password']==$_POST['password']){

                            header("Location:userdb.php");
                        }
                        
                        else{
                            ?>
                            <center><span>wrong password</span></center>
                            <?php
                        }

                    }
                }


            }
        ?>

    </div>




    <script src="#"></script>
</body>
</html>