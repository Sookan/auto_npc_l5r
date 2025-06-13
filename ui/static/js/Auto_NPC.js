window.onload = function(){
const mainContent = document.querySelector('.main-content');
const school_bonus_trait = document.getElementById('school_bonus_trait');
const family_bonus_trait = document.getElementById('family_bonus_trait');
const form = document.getElementById("stat_form");
all_table = ["other_schools_table","skill_table","advantage_table","disadvantage_table"]
all_table_var = {"other_schools_table":"schools","advantage_table":"advantages","disadvantage_table":"disadvantages","skill_table":"skills"}

new_school_map = new Map();
new_adv_map = new Map();
new_dis_map = new Map();
new_skill_map = new Map();
global_skills = {'artisan':'', 'perform':'', 'games':'', 'craft':'', 'lore':''};
can_change_trait = true;
as_infer = false
npc_data = {}
increment = 0;
last_clicked_row = null;
current_npc = null;


form.addEventListener("submit", (event) => {
  event.preventDefault();
  $("#submit_bouton").prop("disabled", true);
  sendData();
});

function if_null_no_text(x){
    if(x==null){
    return '';}
    return x.value;
}

async function sendData() {
  const formData = new FormData(form);
  var formDatajson = {};
  var error_message = ''
  var spin = $(".waiting_box")
  formData.forEach(function(value, key){formDatajson[key] = value});
  formDatajson["info_sup"] = $("#info_sup").val();

  all_table.forEach(function(element){
      var table = document.getElementById(element).rows;
      var table_info = {}
      for (i=1;i<table.length; i++){
          if(element=="other_schools_table"|| element=="skill_table"){
            table_info["name_"+i] = table[i].cells[0].innerText + if_null_no_text(table[i].cells[0].firstElementChild);
            table_info["rank_"+i] = table[i].cells[1].firstElementChild.value;

          }else{

            table_info[i] = table[i].cells[0].innerText ;
      }}
      formDatajson[all_table_var[element]] = table_info;
  })
  if(jQuery.isEmptyObject(formDatajson["schools"])){
  error_message += "You need to confirm at least one school <br>"
  }
  if(formDatajson["family"]==''){
  error_message += "You need to choose a family <br>"
  }

  if(error_message.length === 0){
      spin.removeClass("hidden")
      try {
        npc_data = formDatajson
        const response = await fetch(window.location.origin+"/auto_npc/form_result", {
          method: "POST",
          credentials: 'include',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          },
          body: JSON.stringify(formDatajson)
        }).then(response => response.json());
        $("#npc_name").removeClass("hidden");
        $(".block_response").removeClass("hidden");
        $("#name_responce").text(response.name);
        $("#npc_background").text(response.npc_background);
        $("#npc_appearance").text(response.appearance);
        $("#npc_personality").text(response.personality);
        npc_data["name"] = response.name;
        npc_data["npc_background"] = response.npc_background;
        npc_data["appearance"] = response.appearance;
        npc_data["personality"] = response.personality;
        as_infer = true;
        $("#save_npc").prop("disabled", false);
      } catch (e) {
        console.error(e);
      }
      spin.addClass("hidden")
  }else{
    footer(error_message, "fail")

  }
  $("#submit_bouton").prop("disabled", false);
}



document.getElementById("deconnection-button").onclick = function () {
    location.href = "/disconnect";
};



$("#clan_selection").change(function() {
    var val = $(this).val();
    can_change_trait = true;
    $("#family_selection").html(families_options.get(val));
    $("#school_selection").html(Schools_options.get(val));
    family_bonus_trait.textContent = 'none';
    school_bonus_trait.textContent = 'none';

});
$("#clan_selection").trigger("change");
$("#family_selection").change(function() {
    var val = $(this).val();
    family_bonus_trait.textContent = families_bonus_trait.get(val);
});
$("#school_selection").change(function() {
    var val = $(this).val();
    if (can_change_trait){school_bonus_trait.textContent = Schools_bonus_trait.get(val);}
});

$("#school_selection").change(function() {
    var val = $(this).val();
    if (can_change_trait){school_bonus_trait.textContent = Schools_bonus_trait.get(val);}
});

$("#earth_traitp, #earth_traitm").change(function() {
    var val_traitp = $("#earth_traitp").val();
    var val_traitm = $("#earth_traitm").val();
    $("#earth_cicle").val(Math.min(val_traitp,val_traitm))
    $("#earth_cicle").trigger("change");
});
$("#earth_traitm").trigger("change");

$("#air_traitp, #air_traitm").change(function() {
    var val_traitp = $("#air_traitp").val();
    var val_traitm = $("#air_traitm").val();
    $("#air_cicle").val(Math.min(val_traitp,val_traitm))
    $("#air_cicle").trigger("change");
});
$("#air_traitm").trigger("change");

$("#fire_traitp, #fire_traitm").change(function() {
    var val_traitp = $("#fire_traitp").val();
    var val_traitm = $("#fire_traitm").val();
    $("#fire_cicle").val(Math.min(val_traitp,val_traitm))
    $("#fire_cicle").trigger("change");
});
$("#fire_traitm").trigger("change");

$("#water_traitp, #water_traitm").change(function() {
    var val_traitp = $("#water_traitp").val();
    var val_traitm = $("#water_traitm").val();
    $("#water_cicle").val(Math.min(val_traitp,val_traitm))
    $("#water_cicle").trigger("change");
});
$("#water_traitm").trigger("change");


$("#earth_cicle, #air_cicle, #fire_cicle, #water_cicle, #void_cicle").change(rep_count);



function switch_filter(changelist, to_change, prefix){
    for(var [i, change] of to_change.entries()){
        if(changelist[i]){$(prefix+change).prop("disabled", false);
        }else{$(prefix+change).prop("disabled", true);};
    }
}


$("#Skills_categories").change(function() {
    var val = $(this).val();
    var changelist = [1,1,1,1];
    var skill_to_change = ['high_skills','bugei_skills','merchant_skills',"low_skills"]
    if (val=="high_skills"){changelist = [1,0,0,0]};
    if (val=="bugei_skills"){changelist = [0,1,0,0]};
    if (val=="merchant_skills"){changelist = [0,0,1,0]};
    if (val=="low_skills"){changelist = [0,0,0,1]};
    switch_filter(changelist, skill_to_change,"#skill_cat_")
});

$("#advantages_categories").change(function() {
    var val = $(this).val();
    var changelist = [1,1,1,1,1];
    var advantages_categories =['physical', 'material', 'social', 'spiritual', 'mental']
    if (val=="physical"){changelist = [1,0,0,0,0]};
    if (val=="material"){changelist = [0,1,0,0,0]};
    if (val=="social"){changelist = [0,0,1,0,0]};
    if (val=="spiritual"){changelist = [0,0,0,1,0]};
    if (val=="mental"){changelist = [0,0,0,0,1]};
    switch_filter(changelist,advantages_categories,"#adv_cat_")
    switch_filter(changelist,advantages_categories,"#dis_cat_")

});

$("#filtre_load_npc").change(function() {
    var val = $(this).val();
    var changelist = [1,1,1,1,1,1,1];
    var filtre_load_npc =['crab', 'crane', 'dragon', 'lion', 'mantis', 'phoenix', 'scorpion', 'unicorn']
    if (val=="crab"){changelist = [1,0,0,0,0,0,0,0]};
    if (val=="crane"){changelist = [0,1,0,0,0,0,0,0]};
    if (val=="dragon"){changelist = [0,0,1,0,0,0,0,0]};
    if (val=="lion"){changelist = [0,0,0,1,0,0,0,0]};
    if (val=="mantis"){changelist = [0,0,0,0,1,0,0,0]};
    if (val=="phoenix"){changelist = [0,0,0,0,0,1,0,0]};
    if (val=="scorpion"){changelist = [0,0,0,0,0,0,1,0]};
    if (val=="unicorn"){changelist = [0,0,0,0,0,0,0,1]};
    switch_filter(changelist, filtre_load_npc,"#save_clan_")


});



function xorvec(A,B){
  for( let i=0; i<4;i++){
		A[i] = B[i]^A[i]
  }
  return A
};

$(document).ready(function() {
  $('#searchable_skill').select2({width: '100%'});
  $('#searchable_advantage').select2({width: '100%'});
  $('#searchable_disadvantage').select2({width: '100%'});
  $('#load_npc').select2({width: '20%'});
});

//
};


function checkValue(sender) {
    let min = sender.min;
    let max = sender.max;
    let value = parseInt(sender.value);
    if (value>max) {
        sender.value = max;
    } else if (value<min) {
        sender.value = min;
    }
};

function newschoolbouton() {
    var new_school = $("#school_selection").val();
    var new_school_id = new_school.replace(/[\s\[\]\/]/g,"_")
    if(new_school!='' && new_school_map.size< 3&&!(new_school_map.has("#"+new_school_id))){
        can_change_trait = false;
        $("option[value='"+new_school+"']").toggle();
        $('#default_school').prop("selected", true);
        $("#other_schools_table").append(html1_st+new_school_id+ html1_5 + new_school + html2_st+new_school_id +"_rank' "+ html3_st + 1 + html4_st + html5_st );
        $("#"+new_school_id).click(function() {
            if(last_clicked_row){
                last_clicked_row.classList.remove('chosen_row');
            }
            last_clicked_row = this;
            last_clicked_row.classList.toggle('chosen_row');
          });
        new_school_map.set("#"+new_school_id,new_school);//,rank));
        $("#"+new_school_id+"_rank").change(function() {
                var sum = 0;
                if($(".school_rank").length!=0){
                   $(".school_rank").each(function(){sum += parseInt(this.value);});
                }
                $("#max_insight_rank").text(sum)
                var insight =  $("#insight")
                var tmp = insight.text().split("/")
                if(sum<=1){ insight.text(tmp[0]+"/149")
                }else{
                    insight.text(tmp[0]+"/"+(sum*25+125-1))
                }
        })
        $("#"+new_school_id+"_rank").trigger("change")
    }

};
function deleteRow(r, table) {
  var i = r.parentNode.parentNode.rowIndex;
  var tr_id = r.parentNode.parentNode.id;
  if (table=="other_schools_table"){
      var tmp = $("#"+tr_id+"_rank");
      tmp.val(0)
      tmp.trigger("change")
      tmp = new_school_map.get("#"+tr_id);
      new_school_map.delete("#"+tr_id);
      tmp = $("option[value='"+tmp+"']");
      tmp.toggle();
        if(!new_school_map.size){
            can_change_trait = true;
            $("#school_selection").trigger("change");
        };
      document.getElementById("other_schools_table").deleteRow(i);
      last_clicked_row = null;
  };
  if (table=="advantage_table"){
    document.getElementById("advantage_table").deleteRow(i);
    $("#"+tr_id.slice(2)).prop("disabled", false);
    last_clicked_row = null;
    new_adv_map.delete(tr_id);
  };
  if (table=="disadvantage_table"){
    document.getElementById("disadvantage_table").deleteRow(i);
    $("#"+tr_id.slice(2)).prop("disabled", false);
    last_clicked_row = null;
    new_dis_map.delete(tr_id);
  };
  if (table=="skill_table"){
  document.getElementById("skill_table").deleteRow(i);
  $("#skill"+tr_id.slice(1)).prop("disabled", false);
  last_clicked_row = null;
  new_dis_map.delete(tr_id);
  $("#water_cicle").trigger("change");
  }

};

function newsadv(adv){
    var new_adv = $("#searchable_advantage").val();
    var new_dis = $("#searchable_disadvantage").val();
    var dis_id = 'dis_' +new_dis.toLowerCase().replace(/[\s\[\]\/]/g,"_")
    var adv_id = 'adv_' +new_adv.toLowerCase().replace(/[\s\[\]\/]/g,"_")

    if (new_adv!='' && new_adv_map.size< 6){
        $("#"+adv_id).prop("disabled", true);
        $('#no_adv').prop("selected", true);
        $('#searchable_advantage').trigger('change');
        $("#advantage_table").append("<tr class='textcenter' id='"+"n_"+adv_id+
        "'> <td scope='row'>" + new_adv+
        "</td> <td>"+
        "<input type='button' class='close_button' value='X' onclick=\"deleteRow(this,'advantage_table');\">"+
        "</td> </tr>");
        new_adv_map.set("n_"+adv_id,new_adv);
        $("#n_"+adv_id).click(function() {
            if(last_clicked_row){
                last_clicked_row.classList.remove('chosen_row');
            }
            last_clicked_row = this;
            last_clicked_row.classList.toggle('chosen_row');
          });

    };
    if (new_dis!='' && new_dis_map.size< 6){
        $("#"+dis_id).prop("disabled", true);
        $('#no_disadv').prop("selected", true);
        $('#searchable_disadvantage').trigger('change');
        $("#disadvantage_table").append("<tr class='textcenter' id='"+"n_"+dis_id+
        "'> <td scope='row''>" + new_dis+
        "</td> <td>"+
        "<input type='button' class='close_button' value='X' onclick=\"deleteRow(this,'disadvantage_table');\">"+
        "</td> </tr>");
        new_dis_map.set("n_"+dis_id,new_dis);
        $("#n_"+dis_id).click(function() {
            if(last_clicked_row){
                last_clicked_row.classList.remove('chosen_row');
            }
            last_clicked_row = this;
            last_clicked_row.classList.toggle('chosen_row');
          });

    };
};

function newskillbouton(skill){
    var new_skill = $("#searchable_skill").val();
    var skill_id = new_skill.replace(/[\s\[\]\/]/g,"_")
    var tmp = ''
    var table = document.getElementById("skill_table").rows.length
    if (new_skill!='' && table<10){
        if (!(new_skill in global_skills)){
            $("#skill_"+skill_id).prop("disabled", true);
        }else{
            tmp = ": <input value='specify' type='text'>";
        }
        skill_id = "n_"+skill_id
        $('#skill_defaults').prop("selected", true);
        $('#searchable_skill').trigger('change');
        $("#skill_table").append("<tr class='textcenter' id='"+skill_id+
        "'> <td scope='row' style='width:10vw;'>" + new_skill.charAt(0).toUpperCase()+new_skill.slice(1)+ tmp + html2_st+ skill_id+
        "_skill_rank' class='skill_rank' type='number' min='1' max='10' value='1' oninput='checkValue(this);'></td> <td style='width:3vw;'>"+
        "<input type='button' class='close_button' value='X' onclick=\"deleteRow(this,'skill_table');\"></td> </tr>");
        new_skill_map.set(skill_id,new_skill);
        $("#"+skill_id).click(function() {
            if(last_clicked_row){
                last_clicked_row.classList.remove('chosen_row');
            }
            last_clicked_row = this;
            last_clicked_row.classList.toggle('chosen_row');
        });
        $("#"+skill_id+"_skill_rank").change(rep_count);
        $("#water_traitm").trigger("change");
    };
};

function rep_count() {
    var circle = parseInt($("#earth_cicle").val()) + parseInt($("#air_cicle").val()) +
    parseInt($("#fire_cicle").val()) + parseInt($("#water_cicle").val()) +parseInt($("#void_cicle").val());
    var sum = 7;
    var insight =  $("#insight")
    var tmp = insight.text().split("/")

    if($(".skill_rank").length!=0){
       $(".skill_rank").each(function(){sum += parseInt(this.value);});
    }
    sum = circle*10 +sum
    insight.text(sum +"/"+tmp[1])
    if(sum<=149){$("#insight_rank").text(1)}
    else{$("#insight_rank").text(Math.trunc((sum-100)/25))}
};

function close_footer(footer){
    footer.parentElement.classList.toggle('hidden');
    $(footer.parentElement).removeClass('success');
    $(footer.parentElement).removeClass('fail');
};

function footer(message, status){
    $(".footer").removeClass("hidden").addClass(status)
    $("#footer_message").html(message)
};

function send_npc(npc){
    call_save_npc()
};
async function call_save_npc(){
    if (as_infer){
        var response=false
        try{
            response = await fetch(window.location.origin+"/auto_npc/save_npc", {
              method: "POST",
              credentials: 'include',
              headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
              },
              body: JSON.stringify(npc_data)
            }).then(response => response.json());
            $("#filtre_load_"+response[1]).removeClass('hidden');
            tmp = $("#save_clan_"+response[1])
            tmp.prop("disabled", false);
            console.log(tmp.is(':empty'));
            if (tmp.children().length > 0){
                tmp.append(new Option(response[2], response[0]));
            }else{
                console.log("here");
                tmp.append(new Option(response[2], response[0]));

            }

        } catch (e) {console.error(e); response = false }
        if (response) {
            footer("npc: "+response[2]+" save", 'success');as_infer = false;$("#save_npc").prop("disabled", true);
        }else{footer("npc: fail to save", 'fail');}
        $('#load_npc').select2({width: '20%'});
    };
};

function fetch_npc(npc){
    call_load_npc($("#load_npc").val())
}

async function call_load_npc(npc_id){
    var response=false
    try{
        response = await fetch(window.location.origin+"/auto_npc/get_npc/"+npc_id, {
          method: "get",
          credentials: 'include',
          headers: {
          'Accept': 'application/json',
          }
        }).then(response => response.json());
        npc_data = response;
        all_table.forEach(function(element){
            var table = document.getElementById(element);
            console.log(table.rows[0])
            table.innerHTML = table.rows[0].innerHTML
            var table_info = response[all_table_var[element]]

            for (i=1;i<Math.floor(Object.keys(table_info).length/2)+1; i++){
                if(element=="other_schools_table"|| element=="skill_table"){
                    var row = table.insertRow(i);
                    row.className ="textcenter";
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);

                    cell1.innerHTML = table_info["name_"+i];
                    cell2.innerHTML = "<input id='"+table_info["name_"+i].replace(/[\s\[\]\/]/g,"_")+"_rank' "+" type='number' min='1' max='5' value="+table_info["rank_"+i]+" class='school_rank' oninput='checkValue(this);'>";
                    cell3.innerHTML = "<input type='button' class='close_button' value='X' onclick=\"deleteRow(this,'"+element+"');\">";
                }else{
                    var row = table.insertRow(i);
                    row.className ="textcenter";
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);

                    cell1.innerHTML =  table_info[i];
                    cell2.innerHTML = "<input type='button' class='close_button' value='X' onclick=\"deleteRow(this,'"+element+"');\">";
                };
            };
            delete response[all_table_var[element]];

        });
        $("#npc_name").removeClass("hidden");
        $(".block_response").removeClass("hidden");
        $("#name_responce").text(response.name);
        $("#npc_background").text(response.npc_background);
        $("#npc_appearance").text(response.appearance);
        $("#npc_personality").text(response.personality);

        for(const [key,value] of Object.entries(response)){
            console.log(key,value);
            if(key=="family"){$("#family_selection").val(value)};
            if(key=="clan"){$("#clan_selection").val(value);$("#clan_selection").trigger("change");};
            $("#"+key).val(value);
        }

    }catch (e) {console.error(e); response = false }
    if (response) {
        footer("npc: load successfully", 'success');as_infer = false;$("#save_npc").prop("disabled", true);current_npc = npc_id;
    }else{footer("npc: fail to load", 'fail');};

}



function del_npc(){
    call_del_npc($("#load_npc").val())
};
async function call_del_npc(npc_id){
    var response=false
    try{
        response = await fetch(window.location.origin+"/auto_npc/del_npc/"+npc_id, {
          method: "POST",
          credentials: 'include',
          headers: {
          'Accept': 'application/json'
          }
        }).then(response => response.json());
        $("#save_clan_"+response.clan+" > option[value='"+ npc_id +"']").remove()
        tmp = $("#save_clan_"+response.clan)
        if (tmp.children().length < 1){
            tmp.prop("disabled", true);
            $("#filtre_load_"+response.clan).addClass('hidden');
        }

    } catch (e) {console.error(e); response = false }
    if (response) {
        footer("npc: "+response.name+" delete", 'success');
        if( npc_id == current_npc){
            as_infer = true;$("#save_npc").prop("disabled", false);
        }else{
            as_infer = false;$("#save_npc").prop("disabled", true);
        }
    }else{footer("npc: fail to save", 'fail');}
    $('#load_npc').select2({width: '20%'});
};