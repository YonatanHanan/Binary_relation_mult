var S_textt = "";
var R_textt = "";

$("#R_value").change(function() {
	var R_textt = "$$R=\\begin{Bmatrix}";
	var str = $(this).val();
	var pair_length = str.split(",").length; 
	var regex_str = "";
	for (i = 0; i < pair_length; i++) {
		regex_str += '.*?' + '(\\d+)';
	}
	
	var p = new RegExp(regex_str,["i"]);
	var m = p.exec(str);
	for (i = 1; i < pair_length; i++) {
		R_textt += (m[i] + " & " + m[i+1] + "\\\\");
		i++;
	}
	R_textt += "\\end{Bmatrix}$$";
	$("#R_text").html(R_textt);
	MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}).change();

$("#S_value").change(function() {
	var S_textt = "$$S=\\begin{Bmatrix}";
	var str = $(this).val();
	var pair_length = str.split(",").length; 
	var regex_str = "";
	for (i = 0; i < pair_length; i++) {
		regex_str += '.*?' + '(\\d+)';
	}
	
	var p = new RegExp(regex_str,["i"]);
	var m = p.exec(str);
	for (i = 1; i < pair_length; i++) {
		S_textt += (m[i] + " & " + m[i+1] + "\\\\");
		i++;
	}
	S_textt += "\\end{Bmatrix}$$";
	$("#S_text").html(S_textt);
	MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}).change();

$("#S_value, #R_value").change(function() {
	var RS = "$$RS=\\begin{Bmatrix}";	
	var str = $("#R_value").val();
	var pair_length_r = str.split(",").length; 
	var regex_str = "";
	for (i = 0; i < pair_length_r; i++) {
		regex_str += '.*?' + '(\\d+)';
	}
	
	var p = new RegExp(regex_str,["i"]);
	var m_r = p.exec(str);
	for (i = 1; i < pair_length_r; i++) {
		RS += (m_r[i] + " & " + m_r[i+1] + "\\\\");
		i++;
	}
	RS += "\\end{Bmatrix}";
	
	RS += "\\begin{Bmatrix}";
	var str = $("#S_value").val();
	var pair_length_s = str.split(",").length; 
	var regex_str = "";
	for (i = 0; i < pair_length_s; i++) {
		regex_str += '.*?' + '(\\d+)';
	}
	
	var p = new RegExp(regex_str,["i"]);
	var m_s = p.exec(str);
	for (i = 1; i < pair_length_s; i++) {
		RS += (m_s[i] + " & " + m_s[i+1] + "\\\\");
		i++;
	}
	RS += "\\end{Bmatrix}=\\begin{Bmatrix}";
	var arr = [];
	
	for(i=2; i<=pair_length_r; i++){
		console.log("R" + m_r[i]);
		
		for(j=1; j<=pair_length_s; j++){
			if(m_s[j] == m_r[i]){
				var pair = m_r[i-1] + " " + m_s[j+1];
				if(arr.indexOf(pair) < 0){						
					arr.push(pair);
					RS += m_r[i-1] + " & " + m_s[j+1] + "\\\\";
				}
			}
			j++;
		}
		i++;
	}	
	
	RS += "\\end{Bmatrix}$$";
	$("#RS").html(RS);
	MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}).change();
