<?php
	include "engine/core.php";
	


	class GLOBAL_STORAGE
	{
	   static $parent_object;
	}
	

	$action = $_REQUEST['action'];
	$actions = [];

	

	define("RPP", 50); //кол-во строк на странице

	function array2csv($array)
	{
	   if (count($array) == 0)
	   {
	     return null;
	   }
	   ob_start();
	   $df = fopen("php://output", 'w');
	   fputcsv($df, array_keys($array[0]));
	   foreach ($array as $row)
	   {
	      fputcsv($df, array_values($row));
	   }
	   fclose($df);
	   return ob_get_clean();
	}

	function download_send_headers($filename)
	{
	    // disable caching
	    $now = gmdate("D, d M Y H:i:s");
	    header("Expires: Tue, 03 Jul 2001 06:00:00 GMT");
	    header("Cache-Control: max-age=0, no-cache, must-revalidate, proxy-revalidate");
	    header("Last-Modified: {$now} GMT");

	    // force download
	    header("Content-Type: application/force-download");
	    header("Content-Type: application/octet-stream");
	    header("Content-Type: application/download");

	    // disposition / encoding on response body
	    header("Content-Disposition: attachment;filename={$filename}");
	    header("Content-Transfer-Encoding: binary");
	}

	$actions['csv'] = function()
	{
		if(function_exists("allowCSV"))
		{
			if(!allowCSV())
			{
				die("У вас нет прав на экспорт CSV");
			}
		}
		download_send_headers("data_export_" . date("Y-m-d") . ".csv");
		$data = get_data(true)[0];

		if(function_exists("processCSV"))
		{
			$data = processCSV($data);
		}

		echo array2csv($data);
		die();
	};

	$actions[''] = function()
	{
			
   		

		list($items, $pagination, $cnt) = get_data();

		$sort_order[$_REQUEST['sort_by']] = $_REQUEST['sort_order'];

$next_order['id']='asc';
$next_order['question']='asc';
$next_order['comment']='asc';
$next_order['yes']='asc';
$next_order['no']='asc';
$next_order['orderby']='asc';

		if($_REQUEST['sort_order']=='asc')
		{
			$sort_icon[$_REQUEST['sort_by']] = '<span class="fa fa-long-arrow-up" style="margin-left:5px;"></span>';
			$next_order[$_REQUEST['sort_by']] = 'desc';
		}
		else if($_REQUEST['sort_order']=='desc')
		{
			$sort_icon[$_REQUEST['sort_by']] = '<span class="fa fa-long-arrow-down" style="margin-left:5px;"></span>';
			$next_order[$_REQUEST['sort_by']] = '';
		}
		else if($_REQUEST['sort_order']=='')
		{
			$next_order[$_REQUEST['sort_by']] = 'asc';
		}
		$filter_caption = "";
		$show = '
		<script>
				window.onload = function ()
				{
					$(\'.big-icon\').html(\'<i class="fas fa-file-alt"></i>\');
				};


		</script>
		
		<style>
			html body.concept, html body.concept header, body.concept .table
			{
				background-color:;
				color:#000000;
			}

			#tableMain tr:nth-child(even)
			{
  				background-color: ;
			}
		</style>
		<div class="content-header">
			<div class="btn-wrap">
				<h2><a href="#" class="back-btn"><span class="fa fa-arrow-circle-left"></span></a> '."Вопросы".' </h2>
				<button class="btn blue-inline add_button" data-toggle="modal" data-target="#modal-main">ДОБАВИТЬ</button>
				<p class="small res-cnt">Кол-во результатов: <span class="cnt-number-span">'.$cnt.'</span></p>
			</div>
			
			<form class="navbar-form search-form" role="search">
				<div class="input-group">
					<input type="text" class="form-control" placeholder="Поиск" name="srch-term" id="srch-term" value="'.$_REQUEST['srch-term'].'">
					<button class="input-group-addon"><i class="fa fa-search"></i></button>
				</div>
			</form>
			
		</div>
		<div>'.
		""
		.'</div>';

		$show .= filter_divs();

		$show.='

		<div class="table-wrap" data-fl-scrolls>';
		$table='
			<table class="table table-bordered table-clickable" id="tableMain">
			<thead>
				<tr>

			<th>
				   <a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=id&sort_order='. ($next_order['id']) .'\' class=\'sort\' column=\'id\' sort_order=\''.$sort_order['id'].'\'>ID'. $sort_icon['id'].'</a>
			</th>

			<th>
				<nobr>
					<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=question&sort_order='. ($next_order['question']) .'\' class=\'sort\' column=\'question\' sort_order=\''.$sort_order['question'].'\'>Вопрос'. $sort_icon['question'].'</a>
					
			<span class=\'fa fa-filter filter btn btn-default\' data-placement=\'bottom\' data-content=\'<div class="input-group">
							<input type="text" class="form-control filter-text" name="question_filter">
							<span class="input-group-btn">
								<button class="btn btn-primary add-filter" type="button"><span class="fa fa-filter"></a></button>
							</span>
						</div>\'>
			</span>
				</nobr>
			</th>

			<th>
				<nobr>
					<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=comment&sort_order='. ($next_order['comment']) .'\' class=\'sort\' column=\'comment\' sort_order=\''.$sort_order['comment'].'\'>Комментарий к вопросу'. $sort_icon['comment'].'</a>
					
			<span class=\'fa fa-filter filter btn btn-default\' data-placement=\'bottom\' data-content=\'<div class="input-group">
							<input type="text" class="form-control filter-text" name="comment_filter">
							<span class="input-group-btn">
								<button class="btn btn-primary add-filter" type="button"><span class="fa fa-filter"></a></button>
							</span>
						</div>\'>
			</span>
				</nobr>
			</th>

			<th>
				<nobr>
					<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=yes&sort_order='. ($next_order['yes']) .'\' class=\'sort\' column=\'yes\' sort_order=\''.$sort_order['yes'].'\'>Количество ответов Да'. $sort_icon['yes'].'</a>
					
			<span class=\'fa fa-filter filter btn btn-default\' data-placement=\'bottom\' data-content=\'<div class="input-group">
							<input type="number" min="-2147483648" max="2147483648" step="0.01" class="form-control filter-number-from" name="yes_filter_from" placeholder="От"/>
							<span class="input-group-btn" style="width:0px;"></span>
							<input type="number" min="-2147483648" max="2147483648" step="0.01" class="form-control filter-number-to" name="yes_filter_to" placeholder="До"/>
							<span class="input-group-btn">
								<button class="btn btn-primary add-filter" type="button"><span class="fa fa-filter"></a></button>
							</span>
						</div>\'>
			</span>
				</nobr>
			</th>

			<th>
				<nobr>
					<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=no&sort_order='. ($next_order['no']) .'\' class=\'sort\' column=\'no\' sort_order=\''.$sort_order['no'].'\'>Количество ответов Нет'. $sort_icon['no'].'</a>
					
			<span class=\'fa fa-filter filter btn btn-default\' data-placement=\'bottom\' data-content=\'<div class="input-group">
							<input type="number" min="-2147483648" max="2147483648" step="0.01" class="form-control filter-number-from" name="no_filter_from" placeholder="От"/>
							<span class="input-group-btn" style="width:0px;"></span>
							<input type="number" min="-2147483648" max="2147483648" step="0.01" class="form-control filter-number-to" name="no_filter_to" placeholder="До"/>
							<span class="input-group-btn">
								<button class="btn btn-primary add-filter" type="button"><span class="fa fa-filter"></a></button>
							</span>
						</div>\'>
			</span>
				</nobr>
			</th>

			<th>
				   <a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=orderby&sort_order='. ($next_order['orderby']) .'\' class=\'sort\' column=\'orderby\' sort_order=\''.$sort_order['orderby'].'\'>Порядок отображения'. $sort_icon['orderby'].'</a>
			</th>
					<th></th>
				</tr>
		</thead><tbody>';


		if(count($items) > 0)
		{
			foreach($items as $item)
			{
				$master = ($item['master'] == 1) ? 'Да' : 'Нет';

				$tr = "

				<tr pk='{$item['id']}'>
					
					".(function_exists("processTD")?processTD("<td>".htmlspecialchars($item['id'])."</td>", $item, "ID"):"<td>".htmlspecialchars($item['id'])."</td>")."
".(function_exists("processTD")?processTD("<td><span class='editable ' data-placeholder='' data-inp='textarea' data-url='engine/ajax.php?action=editable&table=questions' data-pk='{$item['id']}' data-name='question'>".htmlspecialchars($item['question'])."</span></td>", $item, "Вопрос"):"<td><span class='editable ' data-placeholder='' data-inp='textarea' data-url='engine/ajax.php?action=editable&table=questions' data-pk='{$item['id']}' data-name='question'>".htmlspecialchars($item['question'])."</span></td>")."
".(function_exists("processTD")?processTD("<td><span class='editable ' data-placeholder='' data-inp='textarea' data-url='engine/ajax.php?action=editable&table=questions' data-pk='{$item['id']}' data-name='comment'>".htmlspecialchars($item['comment'])."</span></td>", $item, "Комментарий к вопросу"):"<td><span class='editable ' data-placeholder='' data-inp='textarea' data-url='engine/ajax.php?action=editable&table=questions' data-pk='{$item['id']}' data-name='comment'>".htmlspecialchars($item['comment'])."</span></td>")."
".(function_exists("processTD")?processTD("<td>".htmlspecialchars($item['yes'])."</td>", $item, "Количество ответов Да"):"<td>".htmlspecialchars($item['yes'])."</td>")."
".(function_exists("processTD")?processTD("<td>".htmlspecialchars($item['no'])."</td>", $item, "Количество ответов Нет"):"<td>".htmlspecialchars($item['no'])."</td>")."
".(function_exists("processTD")?processTD("<td><span class='editable ' data-placeholder='' data-inp='number' data-url='engine/ajax.php?action=editable&table=questions' data-pk='{$item['id']}' data-name='orderby'>".htmlspecialchars($item['orderby'])."</span></td>", $item, "Порядок отображения"):"<td><span class='editable ' data-placeholder='' data-inp='number' data-url='engine/ajax.php?action=editable&table=questions' data-pk='{$item['id']}' data-name='orderby'>".htmlspecialchars($item['orderby'])."</span></td>")."
					<td><a href='#' class='edit_btn'><i class='fa fa-edit' style='color:grey;'></i></a> <a href='#' class='delete_btn'><i class='fa fa-trash' style='color:red;'></i></a></td>
				</tr>";

				if(function_exists("processTR"))
				{
					$tr = processTR($tr, $item);
				}

				$table.=$tr;
			}

			$table .= '</tbody></table></div>'.$pagination;

		}
		else
		{
			$table.=' </tbody></table><div class="empty_table">Нет информации</div>';
		}

		if(function_exists("processTable"))
		{
			$table = processTable($table);
		}

		$show.=$table."<div></div>".'';

		if(function_exists("processPage"))
		{
			$show = processPage($show);
		}

		$show.="
		<style></style>
		<script></script>";


		return $show;

	};

	$actions['edit'] = function()
	{
		$id = $_REQUEST['genesis_edit_id'];
		if(isset($id))
		{
			$item = q("SELECT * FROM questions WHERE id=?",[$id]);
			$item = $item[0];
		}

		

		$html = '
			<form class="form" enctype="multipart/form-data" method="POST">
				<fieldset>'.
					(isset($id)?
					'<input type="hidden" name="id" value="'.$id.'">
					<input type="hidden" name="action" value="edit_execute">'
					:
					'<input type="hidden" name="action" value="create_execute">'
					)
					.'

					
		          <div class="form-group not-editable">
		            <label class="control-label" for="textinput">ID</label>
		            <div>
		            <p>
		              '.$item["id"].'
		            </p>
		            </div>
		          </div>

		          


							<div class="form-group">
								<label class="control-label" for="textinput">Вопрос</label>
								<div>
									<textarea id="question" name="question" class="form-control input-md  ckeditor"  >'.htmlspecialchars($item["question"]).'</textarea>
								</div>
							</div>

						


							<div class="form-group">
								<label class="control-label" for="textinput">Комментарий к вопросу</label>
								<div>
									<textarea id="comment" name="comment" class="form-control input-md  ckeditor"  >'.htmlspecialchars($item["comment"]).'</textarea>
								</div>
							</div>

						


								<div class="form-group">
									<label class="control-label" for="textinput">Порядок отображения</label>
									<div>
										<input id="orderby" name="orderby" type="number" placeholder="" class="form-control input-md "  value="'.htmlspecialchars($item["orderby"]).'">
									</div>
								</div>

							
					<div class="text-center not-editable">
						
					</div>

				</fieldset>
			</form>

		';

		if(function_exists("processEditModalHTML"))
		{
			$html = processEditModalHTML($html);
		}
		die($html);
	};

	$actions['create'] = function()
	{

		

		$html = '
			<form class="form" enctype="multipart/form-data" method="POST">
				<fieldset>
					<input type="hidden" name="action" value="create_execute">
					

							<div class="form-group">
								<label class="control-label" for="textinput">Вопрос</label>
								<div>
									<textarea id="question" name="question" class="form-control input-md  ckeditor"  >'.htmlspecialchars($item["question"]).'</textarea>
								</div>
							</div>

						


							<div class="form-group">
								<label class="control-label" for="textinput">Комментарий к вопросу</label>
								<div>
									<textarea id="comment" name="comment" class="form-control input-md  ckeditor"  >'.htmlspecialchars($item["comment"]).'</textarea>
								</div>
							</div>

						


								<div class="form-group">
									<label class="control-label" for="textinput">Порядок отображения</label>
									<div>
										<input id="orderby" name="orderby" type="number" placeholder="" class="form-control input-md "  value="'.htmlspecialchars($item["orderby"]).'">
									</div>
								</div>

							
					<div class="text-center not-editable">
						
					</div>
				</fieldset>
			</form>

		';

		if(function_exists("processCreateModalHTML"))
		{
			$html = processCreateModalHTML($html);
		}
		die($html);
	};


	$actions['edit_page'] = function()
	{
		$id = $_REQUEST['genesis_edit_id'];
		if(isset($id))
		{
			$item = q("SELECT * FROM questions WHERE id=?",[$id]);
			$item = $item[0];
		}
		else
		{
			die("Ошибка. Редактирование несуществующей записи (вы не указали id)");
		}

		


		$html = '
			<h1 style="line-height: 30px"> Редактирование <br /><small>'."Вопросы".' #'.$id.'</small></h1>
			<form class="form" enctype="multipart/form-data" method="POST">
				<input type="hidden" name="back" value="'.$_SERVER['HTTP_REFERER'].'">
				<fieldset>'.
					(isset($id)?
					'<input type="hidden" name="id" value="'.$id.'">
					<input type="hidden" name="action" value="edit_execute">'
					:
					'<input type="hidden" name="action" value="create_execute">'
					)
					.'

					
		          <div class="form-group not-editable">
		            <label class="control-label" for="textinput">ID</label>
		            <div>
		            <p>
		              '.$item["id"].'
		            </p>
		            </div>
		          </div>

		          


							<div class="form-group">
								<label class="control-label" for="textinput">Вопрос</label>
								<div>
									<textarea id="question" name="question" class="form-control input-md  ckeditor"  >'.htmlspecialchars($item["question"]).'</textarea>
								</div>
							</div>

						


							<div class="form-group">
								<label class="control-label" for="textinput">Комментарий к вопросу</label>
								<div>
									<textarea id="comment" name="comment" class="form-control input-md  ckeditor"  >'.htmlspecialchars($item["comment"]).'</textarea>
								</div>
							</div>

						


								<div class="form-group">
									<label class="control-label" for="textinput">Порядок отображения</label>
									<div>
										<input id="orderby" name="orderby" type="number" placeholder="" class="form-control input-md "  value="'.htmlspecialchars($item["orderby"]).'">
									</div>
								</div>

							

				</fieldset>
				<div>
					<a href="?'.(http_build_query(array_filter($_REQUEST, function($k){return !in_array($k, ['action', 'genesis_edit_id']);}, ARRAY_FILTER_USE_KEY))).'" class="btn cancel" >Закрыть</a>
					<button type="button" class="btn blue-inline" id="edit_page_save">Сохранить</a>
				</div>
			</form>

		';

		if(function_exists("processEditPageHTML"))
		{
			$html = processEditPageHTML($html);
		}
		return $html;
	};

	$actions['reorder'] = function()
	{
		$line = json_decode($_REQUEST['genesis_ids_in_order'], true);
		for ($i=0; $i < count($line); $i++)
		{
			qi("UPDATE `questions` SET `` = ? WHERE id = ?", [$i, $line[$i]]);
		}


		die(json_encode(['status'=>0]));

	};

	$actions['create_execute'] = function()
	{
		if(function_exists("allowInsert"))
		{
			if(!allowInsert())
			{
				header("Location: ".$_SERVER['HTTP_REFERER']);
				die("");
			}
		}
		$question = $_REQUEST['question'];
$comment = $_REQUEST['comment'];
$orderby = $_REQUEST['orderby'];

		$sql = "INSERT INTO questions (`question`, `comment`, `orderby`) VALUES (?, ?, ?)";
		if(function_exists("processInsertQuery"))
		{
			$sql = processInsertQuery($sql);
		}

		qi($sql, [$question, $comment, $orderby]);
		$last_id = qInsertId();

		if(function_exists("afterInsert"))
		{
			afterInsert($last_id);
		}

		

		header("Location: ".$_SERVER['HTTP_REFERER']);
		die("");

	};

	$actions['edit_execute'] = function()
	{
		$skip = false;
		if(function_exists("allowUpdate"))
		{
			if(!allowUpdate())
			{
				$skip = true;
			}
		}
		if(!$skip)
		{
			$id = $_REQUEST['id'];
			$set = [];

			$set[] = is_null($_REQUEST['question'])?"`question`=NULL":"`question`='".addslashes($_REQUEST['question'])."'";
$set[] = is_null($_REQUEST['comment'])?"`comment`=NULL":"`comment`='".addslashes($_REQUEST['comment'])."'";
$set[] = is_null($_REQUEST['orderby'])?"`orderby`=NULL":"`orderby`='".addslashes($_REQUEST['orderby'])."'";

			if(count($set)>0)
			{
				$set = implode(", ", $set);
				$sql = "UPDATE questions SET $set WHERE id=?";
				if(function_exists("processUpdateQuery"))
				{
					$sql = processUpdateQuery($sql);
				}

				qi($sql, [$id]);
				if(function_exists("afterUpdate"))
				{
					afterUpdate();
				}
			}
		}

		if(isset($_REQUEST['back']))
		{
			header("Location: {$_REQUEST['back']}");
		}
		else
		{
			header("Location: ".$_SERVER['HTTP_REFERER']);
		}
		die("");
	};



	$actions['delete'] = function()
	{
		if(function_exists("allowDelete"))
		{
			if(!allowDelete())
			{
				die("0");
			}
		}

		$id = $_REQUEST['id'];
		try
		{
			qi("DELETE FROM questions WHERE id=?", [$id]);
			if(function_exists("afterDelete"))
			{
				afterDelete();
			}
			echo "1";
		}
		catch (Exception $e)
		{
			echo "0";
		}

		die("");
	};

	function filter_query($srch)
	{
		$filters = [];
		
		if(isset2($_REQUEST['question_filter']))
		{
			$filters[] = "`question` LIKE '%{$_REQUEST['question_filter']}%'";
		}
				

		if(isset2($_REQUEST['comment_filter']))
		{
			$filters[] = "`comment` LIKE '%{$_REQUEST['comment_filter']}%'";
		}
				

		if(isset2($_REQUEST['yes_filter_from']) && isset2($_REQUEST['yes_filter_to']))
		{
			$filters[] = "yes >= {$_REQUEST['yes_filter_from']} AND yes <= {$_REQUEST['yes_filter_to']}";
		}

		

		if(isset2($_REQUEST['no_filter_from']) && isset2($_REQUEST['no_filter_to']))
		{
			$filters[] = "no >= {$_REQUEST['no_filter_from']} AND no <= {$_REQUEST['no_filter_to']}";
		}

		

		$filter="";
		if(count($filters)>0)
		{
			$filter = implode(" AND ", $filters);
			if($srch=="")
			{
				$filter = " WHERE $filter";
			}
			else
			{
				$filter = " AND ($filter)";
			}
		}
		return $filter;
	}

	function filter_divs()
	{
		
		
		if(isset2($_REQUEST['question_filter']))
		{
			$filter_divs .= "
			<div class='filter-tag'>
					<input type='hidden' class='filter' name='question_filter' value='{$_REQUEST['question_filter']}'>
				   <span class='fa fa-times remove-tag'></span> Вопрос: <b>{$_REQUEST['question_filter']}</b>
			</div>";

			$filter_caption = "Фильтры: ";
		}

		

		if(isset2($_REQUEST['comment_filter']))
		{
			$filter_divs .= "
			<div class='filter-tag'>
					<input type='hidden' class='filter' name='comment_filter' value='{$_REQUEST['comment_filter']}'>
				   <span class='fa fa-times remove-tag'></span> Комментарий к вопросу: <b>{$_REQUEST['comment_filter']}</b>
			</div>";

			$filter_caption = "Фильтры: ";
		}

		

		if(isset2($_REQUEST['yes_filter_from']) && isset2($_REQUEST['yes_filter_to']))
		{
			$filter_divs .= "
			<div class='filter-tag'>
					<input type='hidden' class='filter' name='yes_filter_from' value='{$_REQUEST['yes_filter_from']}'>
					<input type='hidden' class='filter' name='yes_filter_to' value='{$_REQUEST['yes_filter_to']}'>
					<span class='fa fa-times remove-tag'></span> Количество ответов Да: <b>{$_REQUEST['yes_filter_from']}–{$_REQUEST['yes_filter_to']}</b>
			</div>";

			$filter_caption = "Фильтры: ";
		}
				

		if(isset2($_REQUEST['no_filter_from']) && isset2($_REQUEST['no_filter_to']))
		{
			$filter_divs .= "
			<div class='filter-tag'>
					<input type='hidden' class='filter' name='no_filter_from' value='{$_REQUEST['no_filter_from']}'>
					<input type='hidden' class='filter' name='no_filter_to' value='{$_REQUEST['no_filter_to']}'>
					<span class='fa fa-times remove-tag'></span> Количество ответов Нет: <b>{$_REQUEST['no_filter_from']}–{$_REQUEST['no_filter_to']}</b>
			</div>";

			$filter_caption = "Фильтры: ";
		}
				
		$show = $filter_caption.$filter_divs;

		return $show;
	}


	function get_data($force_kill_pagination=false)
	{
		if(function_exists("allowSelect"))
		{
			if(!allowSelect())
			{
				die("У вас нет доступа к данной странице");
			}
		}

		$pagination = 1;
		if($force_kill_pagination==true)
		{
			$pagination = 0;
		}
		$items = [];

		$srch = "";
		
			if($_REQUEST['srch-term'])
			{
				$srch = "WHERE ((`question` LIKE '%{$_REQUEST['srch-term']}%') or (`comment` LIKE '%{$_REQUEST['srch-term']}%'))";
			}

		$filter = filter_query($srch);
		$where = "";
		if($where != "")
		{
			if($filter!='' || $srch !='')
			{
				$where = " AND ($where)";
			}
			else
			{
				$where = " WHERE ($where)";
			}
		}


		
				$default_sort_by = '';
				$default_sort_order = '';
			

		if(isset($default_sort_by) && $default_sort_by)
		{
			$order = "ORDER BY $default_sort_by $default_sort_order";
		}

		if(isset($_REQUEST['sort_by']) && $_REQUEST['sort_by']!="")
		{
			$order = "ORDER BY {$_REQUEST['sort_by']} {$_REQUEST['sort_order']}";
		}


		if($pagination == 1)
		{
			$sql = "SELECT SQL_CALC_FOUND_ROWS * FROM (SELECT  main_table.*  FROM questions main_table) temp $srch $filter $where $order LIMIT :start, :limit";
			if(function_exists("processSelectQuery"))
			{
				$sql = processSelectQuery($sql);
			}

			$items = q($sql,
				[
					'start' => MAX(($_GET['page']-1), 0)*RPP,
					'limit' => RPP
				]);
			$cnt = qRows();
			$pagination = pagination($cnt);
		}
		else
		{
			$sql = "SELECT SQL_CALC_FOUND_ROWS * FROM (SELECT main_table.*  FROM questions main_table) temp $srch $filter $where $order";
			if(function_exists("processSelectQuery"))
			{
				$sql = processSelectQuery($sql);
			}
			$items = q($sql, []);
			$cnt = qRows();
			$pagination = "";
		}

		if(function_exists("processData"))
		{
			$items = processData($items);
		}

		return [$items, $pagination, $cnt];
	}

	

	$content = $actions[$action]();
	echo masterRender("Вопросы", $content, 0);
