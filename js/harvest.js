window.onload=function(){
	var listgroup=document.getElementsByClassName('list-group')[0];
	var a_lists=listgroup.getElementsByTagName('a');
	var table_content=document.getElementsByClassName('table table-striped')[0];
	var second_title=document.getElementsByClassName('second_title')[0];
	var main_content=document.getElementById('main_content');

	for(var i=0;i<a_lists.length;i++){
		a_lists[i].title=a_lists[i].innerText;
		a_lists[i].index=i;
		a_lists[i].onclick=function(){
			// alert(main_content.innerHTML);
			// alert(this.title);
			var self=this;
			console.log(self.index);
			console.log(this.index);
			switch(this.index){
				case 0:
				second_title.innerHTML=this.title;
				table_content.innerHTML="";
				var head_0='<tr><th>#</th><th>课题名称（下达编号）</th><th>来源</th><th>起讫时间</th><th>承担人</th>';
				table_content.innerHTML+=head_0;
				table_content.innerHTML+='<tr><td>100</td><td>基于粒子动力学演化算法的网络抗毁性能性研究</td><td>国家自然科学基金</td><td>2010-2012<td>李康顺教授</tr>';
				break;
				case 1:
				second_title.innerHTML=this.title;
				table_content.innerHTML="";
				var head_1='<tr><th>#</th><th>论文名称</th><th>刊物</th><th>年度</th><th>作者</th><th>级别</th></tr>';
				table_content.innerHTML+=head_1;
				main_content.innerHTML='<tr><td></td><td><a href="#" class="href_title">"以学生为中心"理念在教学团队建设中的运用研究</a></td><td>管理科学（国家自然科学基金委重要期刊）</td><td>2009</td><td>廖列法</td><td>中文核心</td></tr><tr><td></td><td><a href="#" class="href_title">信息系统问卷调查质量评估研究</a></td><td>科学学与科学技术管理（国家自然科学基金委重要期刊</td><td>2008</td><td>廖列法</td><td>中文核心</td></tr><tr><td></td><td><a href="#" class="href_title">信息类专业“以学生为中心”双语教学模式的探索与研究</a></td><td>中国电力教育</td><td>2012</td><td>胡中栋、曾传璜</td><td></td></tr>';
				break;
				case 2:second_title.innerHTML=this.title;
				table_content.innerHTML="";
				var head_2='<tr><th>#</th><th>论文名称</th><th>刊物</th><th>年度</th><th>作者</th><th>级别</th></tr>';
				table_content.innerHTML+=head_2;
				main_content.innerHTML="xiao";
				break;
				case 3:second_title.innerHTML=this.title;
				table_content.innerHTML="";
				var head_3='<tr><th>#</th><th>论文名称</th><th>刊物</th><th>年度</th><th>作者</th><th>级别</th></tr>';
				table_content.innerHTML+=head_3;
				main_content.innerHTML='<table class="table table-striped"><tr><th>#</th><th>论文名称</th><th>作者</th><th>发表时间</th><th>发表刊物、会议名称及检索号或ISSN</th> </tr><tr><td></td><td><a href="#" class="href_title">Creating Efficient Visual Codebook Enesembles for Object categorization</a></td><td>罗会兰</td><td>2011</td><td>IEEE Transaction on Systems，Man and Cybernetics,Part A</td></table>';
				break;
				case 4:second_title.innerHTML=this.title;
				table_content.innerHTML="";
				var head_4='<tr><th>#</th><th>论文名称</th><th>刊物</th><th>年度</th><th>作者</th><th>级别</th></tr>';
				table_content.innerHTML+=head_4;
				main_content.innerHTML="ren";
				break;
				case 5:second_title.innerHTML=this.title;
				table_content.innerHTML="";
				var head_5='<tr><th>#</th><th>论文名称</th><th>刊物</th><th>年度</th><th>作者</th><th>级别</th></tr>';
				table_content.innerHTML+=head_5;
				main_content.innerHTML="baby";
				break;
				default:
				break;
			}
		}
	}
};
	

