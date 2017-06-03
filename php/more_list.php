<?php
require_once('./connect.php');
	// $callback=$_GET('_jsonp');
	$last=$_GET['last'];
	$count=$_GET['count'];
	 $flag=false;
	$sql="SELECT * FROM news_lists ORDER BY time DESC LIMIT $last,$count";
	$rs=$link->query($sql);
	// $num_results = $rs -> num_rows; 
	// echo $num_results;
	$sayList=array();
	while ($row=$rs->fetch_array()) {
		$flag=true;
		$sayList[]=array(
			'title'=>$row['title'],
			'time'=>$row['time'],
			'id'=>$row['id'],
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