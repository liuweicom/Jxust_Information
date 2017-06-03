<?php
require_once('./connect.php');
	$type=$_GET['type'];
	$flag=false;
	$sql="SELECT * FROM laboratory_resources where type='$type'";
	$rs=$link->query($sql);
	$sayList=array();
	while ($row=$rs->fetch_array()) {
		$flag=true;
		$sayList[]=array(
			'ID'=>$row['ID'],
			'title_name'=>$row['title_name'],
			'type'=>$row['type'],
			'src'=>$row['src'],
			);
	}	
	if($flag){
		echo json_encode($sayList);
	}else{
		echo true;
		echo "fail end";
	}
	$link->close();
	?>