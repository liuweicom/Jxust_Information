<?php
require_once('./connect.php');
	// $callback=$_GET('_jsonp');
	$table_names=$_GET['type'];
	 $flag=false;
	$sql="SELECT * FROM $table_names";
	$rs=$link->query($sql);
	// $num_results = $rs -> num_rows; 
	// echo $num_results;
	$sayList=array();
	while ($row=$rs->fetch_array()) {
		$flag=true;
		$sayList[]=array(
			'title_name'=>$row['title_name'],
			'time'=>$row['time'],
			'id'=>$row['id'],
			'level'=>$row['level'],
			'publication'=>$row['publication'],
			'author'=>$row['author'],
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