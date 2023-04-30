__s3_require__basestyle([6],{30:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=a(2),o=i(r);t.exports=o.default.modules.jQuery},46:function(module,exports,__webpack_require__){"use strict";function checkboxClickFunction($el,event,from_controller,callback,wcond){if(from_controller||$(event.target).is("input")){var el=$(this).find("input"),el_parent=$(this),group=$('input[name="'+el.eq(0).attr("name")+'"]'),add_class,class_target,callback_attr,SD,SD_chbox=$(""),wcond=0===wcond||wcond===-1||parseInt(wcond)>0;if(add_class=$(this).data("add-class"),class_target=$($(this).data("class-target")),callback_attr=el.data("callback"),el.is(":disabled"))return!1;if(el.attr("target")?SD_chbox=el:el.attr("parent")&&(SD_chbox=$(el.attr("parent"))),SD_chbox.size()&&(SD={"empty-text":SD_chbox.data("selector-empty-text"),"xelem-text":SD_chbox.data("selector-xelem-text"),"text-target":$(SD_chbox.data("selector-text-target")),"checked-all":$(SD_chbox.data("selector-checked-all")),"checked-all-wcond":$(SD_chbox.data("selector-checked-all-wcond"))}),1==from_controller){if(el.is(":checked"))return void(wcond?(SD["checked-all"].removeClass("active"),SD["checked-all-wcond"].addClass("active"),SD["text-target"].text(SD["checked-all-wcond"].text())):(SD["checked-all-wcond"].removeClass("active"),SD["checked-all"].addClass("active"),SD["text-target"].text(SD["checked-all"].text())));el.prop("checked",!0)}if(el.attr("target")&&(el_parent.is(".half-active")&&el.prop("checked",!0),$(el.attr("target")).find("label.control-checkbox").each(function(){var t,e;t=$(this).data("add-class"),e=$($(this).data("class-target")),el.is(":checked")?(el_parent.removeClass("half-active"),$(this).addClass("active").find("input").prop("checked",!0),e.size()&&e.addClass(t)):($(this).removeClass("active").find("input").prop("checked",!1),e.size()&&e.removeClass(t))}),el.is(":checked")?wcond?(SD["checked-all"].removeClass("active"),SD["checked-all-wcond"].addClass("active"),SD["text-target"].text(SD["checked-all-wcond"].text())):(SD["checked-all-wcond"].removeClass("active"),SD["checked-all"].addClass("active"),SD["text-target"].text(SD["checked-all"].text())):(SD["checked-all"].removeClass("active"),SD["checked-all-wcond"].removeClass("active"),SD["text-target"].text(SD["empty-text"]))),el.attr("parent")){var parent_chbox=$(el.attr("parent")),parent=parent_chbox.parent(),parent_add_class=parent.data("add-class"),parent_class_target=$(parent.data("class-target")),group=el.parents(".cb-group:first"),checked_size=group.find("input:checked").size(),unchecked_size=group.find("input").not(":checked").size(),all_size=group.find("input").size();el.is(":checked")?all_size==checked_size&&0!=all_size?(parent.removeClass("half-active").addClass("active").find("input").prop("checked",!0),parent_class_target.addClass(parent_add_class),wcond?(SD["checked-all"].removeClass("active"),SD["checked-all-wcond"].addClass("active")):(SD["checked-all-wcond"].removeClass("active"),SD["checked-all"].addClass("active")),SD["text-target"].text(SD["checked-all"].text())):(parent.addClass("half-active").find("input").prop("checked",!1),parent_class_target.addClass(parent_add_class),SD["checked-all"].removeClass("active"),SD["checked-all-wcond"].removeClass("active"),SD["text-target"].text(SD["xelem-text"]+" ("+checked_size+")")):unchecked_size==all_size&&0!=all_size?(parent.removeClass("active").removeClass("half-active").find("input").prop("checked",!1),parent_class_target.removeClass(parent_add_class),SD["checked-all"].removeClass("active"),SD["checked-all-wcond"].removeClass("active"),SD["text-target"].text(SD["empty-text"])):0!=checked_size&&0!=unchecked_size&&(parent.removeClass("active").addClass("half-active").find("input").prop("checked",!1),parent_class_target.addClass(parent_add_class),SD["checked-all"].removeClass("active"),SD["checked-all-wcond"].removeClass("active"),SD["text-target"].text(SD["xelem-text"]+" ("+checked_size+")"))}el.is(":checked")?("radio"==el.attr("type")&&group.each(function(){$(this).prop("checked",!1).parent().removeClass("active")}),el.prop("checked",!0),$(this).addClass("active")):(el.prop("checked",!1),$(this).removeClass("active")),el.is(":checked")?class_target.size()&&class_target.addClass(add_class):class_target.size()&&class_target.removeClass(add_class);try{eval(callback_attr)}catch(t){}void 0!=callback&&"function"==typeof callback&&callback(event,el.is(":checked"))}}function changeCheckboxAndRadio(t,e){return t.each(function(){var t,a,i=$(this),r=i.find('input[type="checkbox"], input[type="radio"]');if(i.data("ControlInit"))r.is(":disabled")?i.addClass("disabled"):i.removeClass("disabled"),r.is(":checked")?i.addClass("active"):i.removeClass("active");else{i.data("ControlInit",!0),t=i.data("add-class"),a=$(i.data("class-target")),$('<span class="ico"></span>').insertAfter(r);var o=r.next(".ico"),d=o.width();r.css({"margin-right":d*-1-2}),r.is(":disabled")&&i.addClass("disabled"),r.is(":checked")&&i.addClass("active"),i.click(function(t){checkboxClickFunction(i,t,!1,e)})}})}function chosenDestroy(t){return t.show().removeClass("chzn-done"),t.next().remove(),t}function changeControls(t,e){return t.each(function(){$(this).find(".g-form-control-select").each(function(){var t=$(this).attr("data-width");t||(t=150),/\%$/.test(t)||/(px)%/.test(t)||(t+="px"),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?$(this).removeClass("g-form-control-select--hide"):$(this).chosen({width:t,no_results_text:$(this).attr("data-nothing-found"),placeholder_text_multiple:$(this).attr("data-placeholder"),disable_search_threshold:$(this).is(".without-search")?99999:10}).on("chosen:showing_dropdown",function(){$(this).hasClass("error")&&anketaController.toggleFieldError($(this),"show"),window.parent.s3stepFormChanged&&window.parent.s3stepFormChanged()}).on("chosen:hiding_dropdown",function(){$(this).hasClass("error")&&anketaController.toggleFieldError($(this),"hide"),window.parent.s3stepFormHidden&&window.parent.s3stepFormHidden()}).show(function(){var t=$(this).next(".chosen-container").height();$(this).css({left:parseInt($(this).next(".chosen-container").width())/2,top:t});var e=$(this).find("option");e.length>8&&$(this).parents(".g-form-field__value").find(".chosen-results").css("height","240px")})}),$(this).find(".control-radio, .control-checkbox").length&&changeCheckboxAndRadio($(this).find(".control-radio, .control-checkbox"),e)})}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$=__webpack_require__(30),anketaController=module.exports=window.anketaController={isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),calendarFormat:"dd-mm-yy",init:function(t){var e=this;e.anketa_id=t.anketa_id,e.groups=t.groups,e.form=t.form_selector,e.field=t.field_selector,e.row_box=t.row_box_selector,e.row=t.row_selector,e.calendarСrutch=t.calendarСrutch,$(e.form).find('[id*="anketa_group_dublicate"]').on("click",function(){var t=parseInt($(this).attr("id").replace("anketa_group_dublicate_","")),e=anketaController.groups[t].dublicate_params;anketaController.dublicateGroup($(this),t,e)}),$(e.form).find('[id*="anketa_group_remove"]').on("click",function(){var t=parseInt($(this).attr("id").replace("anketa_group_remove_","")),a=e.groups[t].dublicate_params,i=parseInt($(this).attr("data-copy-index"));e.removeGroupDublicate(t,a,i)}),$(e.form).on("submit",function(){e.getAnketaStructure()}),delete $.mask.definitions[9],$.mask.definitions["*"]="[0-9]",$("#form_"+e.anketa_id).find('input[type="text"][data-mask]').each(function(){$(this).mask($(this).attr("data-mask"))});var a;$(e.form).find(e.field).each(function(){10==$(this).attr("data-field-type")?e.calendarInit($(this),!1):11==$(this).attr("data-field-type")&&e.calendarInit($(this),!0),a=$(this).find(".g-form-control-value"),a.attr("data-field-width")&&a.width(a.attr("data-field-width"))}),e.groupsAttachInit(),changeControls($(e.form)),$(e.form).find('.g-form-control-text.g-form-control-text--error:not(".g-form-calendar__label"), .g-form-control-textarea.g-form-control-textarea--error').on("focus",function(){e.toggleFieldError($(this),"show")}).on("blur",function(){e.toggleFieldError($(this),"hide")})},groupsAttachInit:function(){var t=this;$(t.form).find(".anketa-group-toggler").each(function(){$(this).off("change").on("change",function(e){var a=parseInt($(this).parents(t.field).attr("data-field-id")),i=$(this).attr("data-call-groups");t.toggleGroup(i,$(this),a)})})},calendarSetTotalValue:function(t,e,a){var i=e.val(),r=a.val();if(i&&r&&t.length){var o=e.data("label"),d=a.data("label");t.val(o+" "+i+" "+d+" "+r)}},calendar:function(t,e){var a=this;t.find(".ui-datepicker-trigger").remove(),t.find(".g-form-init-calendar").removeClass("hasDatepicker").datepicker({showOn:"button",dateFormat:a.calendarFormat,beforeShow:function(t){$(this).hasClass("g-form-control-text--error")&&anketaController.toggleFieldError($(this),"show")},onClose:function(t){$(this).hasClass("g-form-control-text--error")&&anketaController.toggleFieldError($(this),"hide"),"object"===("undefined"==typeof steps?"undefined":_typeof(steps))&&null!==steps&&steps.validate()}})},calendarInterval:function(t,e){function a(){i.calendarSetTotalValue(d,r,o)}var i=this,r=t.find(".g-form-init-calendar--from").removeClass("hasDatepicker"),o=t.find(".g-form-init-calendar--to").removeClass("hasDatepicker"),d=t.find(".g-form-init-calendar-interval"),n=t.find(".j-from"),s=t.find(".j-to");t.find(".ui-datepicker-trigger").remove(),r.datepicker({changeMonth:!0,numberOfMonths:1,showOn:"button",dateFormat:i.calendarFormat,beforeShow:function(){$(this).hasClass("g-form-control-text--error")&&anketaController.toggleFieldError($(this),"show")},onClose:function(t){o.datepicker("option","minDate",t),a(),e&&n.val(t),$(this).hasClass("g-form-control-text--error")&&anketaController.toggleFieldError($(this),"hide"),"object"===("undefined"==typeof steps?"undefined":_typeof(steps))&&null!==steps&&steps.validate()}}),o.datepicker({changeMonth:!0,numberOfMonths:1,showOn:"button",dateFormat:i.calendarFormat,beforeShow:function(){$(this).hasClass("g-form-control-text--error")&&anketaController.toggleFieldError($(this),"show")},onClose:function(t){r.datepicker("option","maxDate",t),a(),e&&s.val(t),$(this).hasClass("g-form-control-text--error")&&anketaController.toggleFieldError($(this),"hide"),"object"===("undefined"==typeof steps?"undefined":_typeof(steps))&&null!==steps&&steps.validate()}})},calendarCrutch:function(t){this.calendar(t,!0)},calendarIntervalCrutch:function(t){this.calendarInterval(t,!0)},calendarMobile:function(t,e){t.find(".g-form-init-calendar").attr("type","date")},calendarIntervalMobile:function(t,e){function a(){i.calendarSetTotalValue(d,r,o)}var i=this,r=t.find(".g-form-init-calendar--from"),o=t.find(".g-form-init-calendar--to"),d=t.find(".g-form-init-calendar-interval"),n=t.find(".j-from"),s=t.find(".j-to");r.attr("type","date"),o.attr("type","date"),r.on("change",function(){var t=r.val();o.attr("min",t),e&&n.val(t),a()}),o.on("change",function(){var t=o.val();r.attr("max",t),e&&s.val(t),a()}),r.trigger("change"),o.trigger("change")},calendarMobileCrutch:function(t){this.calendarMobile(t,!0)},calendarIntervalMobileCrutch:function(t){this.calendarIntervalMobile(t,!0)},calendarInit:function(t,e){var a=this;if(!t.length)return!1;var i=["calendar"];e&&i.push("Interval"),a.isMobile&&i.push("Mobile"),a.calendarСrutch&&i.push("Crutch");var r=i.join("");a[r]||alert(r),a[r](t)},dublicateGroup:function(t,e,a){if(!t||!e||!a)return!1;var i,r,o,d,n,s,l=this,c=($(t).parents(".g-form-row__subrow"),$(l.form).find(l.field+'[data-group-id="'+e+'"]').not(".g-form-field--cloned")),h=$(c).size(),f=$(l.form).find(l.field+'[data-group-id="'+e+'"]'),p=$(f).size(),u=parseInt(p/h)-1,g=[],_=[],m=a,v=1;if(s=0==u?$(l.form).find(l.field+'[data-group-id="'+e+'"]').not(".g-form-field--cloned"):$(l.form).find('.g-form-row__subrow[data-copy-index="'+u+'"]').removeClass("g-form-row-double").find(l.field+'[data-group-id="'+e+'"]'),u++,u==m.limit)$(l.form).find("#anketa_group_dublicate_"+e).hide();else if(u>m.limit)return!1;s.each(function(){if(i=$(this).parent(".g-form-row__subrow"),0==i.next(".g-form-row__subrow.dublicated").size()&&($(this).parent(".g-form-row__subrow").after('<div data-group-id="'+e+'" class="g-form-row__subrow g-form-row-double dublicated new"></div>'),1==u&&$(this).parent(".g-form-row__subrow").addClass("g-form-group-"+e+"-donor")),r=$(this).clone().addClass("g-form-field--cloned"),r.hasClass("dublicator"))o=1==u?r.find("#anketa_group_dublicate_"+e):r.find("#anketa_group_remove_"+e),o.val(m.remove_text).attr("id","anketa_group_remove_"+e).attr("data-copy-index",u).show(),r.find('[id*="anketa_group_remove"]').on("click",function(){var t=parseInt($(this).attr("id").replace("anketa_group_remove_","")),e=l.groups[t].dublicate_params,a=parseInt($(this).attr("data-copy-index"));anketaController.removeGroupDublicate(t,e,a)});else{r.find('input[type="radio"], input[type="checkbox"]').prop("checked",!1).parent('label[class*="control"]').removeClass("active").find(".ico").remove(),r.find('input[type="text"], input[type="email"]').val(""),chosenDestroy(r.find(".g-form-control-select").val(""));r.find('[name*="field_"]').each(function(){n=$(this).attr("origin-name")?$(this).attr("origin-name"):$(this).attr("name"),d=5==r.attr("data-field-type")?n.replace("[]","")+"_dublicate_"+u+"[]":n+"_dublicate_"+u,$(this).attr("name",d).attr("origin-name",n).attr("id",d)}),r.find(".g-form-calendar__label").length&&r.find(".g-form-calendar__label").each(function(){$(this).attr("origin-id")?$(this).attr("origin-id",$(this).attr("origin-id")):$(this).attr("origin-id",$(this).attr("id")),n=$(this).attr("origin-id")+"_dublicate_"+u,$(this).attr("id",n)})}$(this).parent(".g-form-row__subrow").next(".g-form-row__subrow.dublicated.new").append(r.attr("data-copy-index",u))}),$('.g-form-row__subrow.dublicated[data-group-id="'+e+'"]').each(function(){var t=$(this).next(".g-form-row__subrow").not(".dublicated");$(this).attr("data-copy-index",u).removeClass("new"),t.next(".g-form-row__subrow").hasClass("dublicated")&&t.next(".g-form-row__subrow").attr("data-group-id")==e?_.push($(this).attr("data-copy-group-index",v).get(0)):$(this).prev(".g-form-row__subrow").not(".g-form-row-double").prev(".g-form-row__subrow.g-form-row-double").get(0)&&(g.push($(this).get(0)),v++)}),$('.g-form-row__subrow.g-form-row-double[data-group-id="'+e+'"]').find(l.field+".g-form-field--cloned").each(function(){0==$(this).attr("data-field-type")?$(this).attr("data-field-id","dublicator_"+$(this).attr("data-group-id")+"_"+u):($(this).attr("data-field-id",$(this).attr("data-field-id").replace(/_.*$/,"")+"_dublicate_"+u),10==$(this).attr("data-field-type")?l.calendarInit($(this),!1):11==$(this).attr("data-field-type")&&l.calendarInit($(this),!0))});for(var k=0;k<_.length;k++){var b=parseInt($(_[k]).attr("data-copy-group-index"))-1;$(_[k]).insertBefore(g[b])}$('.g-form-row__subrow.dublicated[data-group-id="'+e+'"]').each(function(){$(this).removeClass("dublicated")}),l.groupsAttachInit(),changeControls($(l.form))},removeGroupDublicate:function(t,e,a){var i,r,o,d,n,s,l,c=this,h=$(c.form).find("#anketa_group_dublicate_"+t);$(c.form).find('.g-form-row__subrow[data-group-id="'+t+'"][data-copy-index="'+a+'"]').find(".anketa-group-toggler").each(function(){if(n=$(this).parents(c.field).attr("data-field-id"),s=$(c.form).find(c.field+"[link-"+n+"]"),s&&s.length&&(1==$(this).prop("checked")&&$(this).is('input[type="radio"]')||$(this).is('input[type="checkbox"]')||""!=$(this).val()&&$(this).is("select"))){l=s.attr("linked-to").split(",");for(var t=0;t<l.length;t++)l[t]==n&&delete l[t];s.attr("linked-to",l.toString().replace(/^,|,$/g,"")),s.removeAttr("link-"+n),""==s.attr("linked-to")&&s.toggleClass("hidden")}}),$(c.form).find('.g-form-row__subrow[data-group-id="'+t+'"][data-copy-index="'+a+'"]').remove();var f=$(c.form).find(c.field+'[data-group-id="'+t+'"]').not(".g-form-field--cloned").size(),p=$(c.form).find(c.field+'[data-group-id="'+t+'"]').size(),u=p/f-1;u<e.limit&&h.not(":visible")&&h.show(),$(c.form).find(c.row).each(function(){$(this).find('.g-form-row__subrow[data-group-id="'+t+'"]').length&&(i=1,r=0,o=$(this).find(".g-form-row__subrow.g-form-group-"+t+"-donor").size(),$(this).find('.g-form-row__subrow[data-group-id="'+t+'"]').each(function(){$(this).attr("data-copy-index",i).find(c.field).attr("data-copy-index",i).find('[id*="anketa_group_remove"]').attr("data-copy-index",i),$(this).find('[name*="field_"]').each(function(){$(this).attr("name",$(this).attr("name").replace(/dublicate_\d/,"dublicate_"+i)),$(this).attr("id",$(this).attr("id").replace(/dublicate_\d/,"dublicate_"+i))}),$(this).find(".g-form-calendar__label").length&&$(this).find(".g-form-calendar__label").each(function(){d=$(this).attr("id").replace(/dublicate_(\d*)/,"dublicate_"+i),$(this).attr("id",d)}),$(this).find(".g-form-init-calendar").length&&$(this).find(".g-form-init-calendar").each(function(){c.calendarInit($(this).parents(c.field),$(this).hasClass("g-form-calendar__label"))}),$(this).find(".g-form-init-calendar-interval").length&&$(this).find(".g-form-init-calendar-interval").each(function(){d=$(this).attr("id").replace(/dublicate_(\d*)/,"dublicate_"+i),$(this).attr("id",d).attr("name",d)}),r++,1==o?i++:r%o==0&&i++}))})},toggleGroup:function(t,e,a){var i,r,o,d,n=this,t=t.split(","),s=e.val();if(t.length)for(var l=0;l<t.length;l++){if(!n.groups[t[l]])return!1;if(i=n.groups[t[l]].attach_params.dependence,""==i)return!1;r=n.groups[t[l]].attach_params.fields;for(var c in r)if(o=$(n.form).find(n.field+'[data-group-id="'+t[l]+'"]'),1==$.isArray(r[c].field_options)||$.isPlainObject(r[c].field_options)){if(r[c].field_id==a)if(e.is('input[type="checkbox"]'))if($.isArray(n.groups[t[l]].attach_params.fields[a].field_options))(n.groups[t[l]].attach_params.fields[a].field_options==s||$.inArray(s,n.groups[t[l]].attach_params.fields[a].field_options)>=0)&&(d=1==e.prop("checked"),n.toggle_fields(e,o,a,i,d));else for(var h in n.groups[t[l]].attach_params.fields[a].field_options)n.groups[t[l]].attach_params.fields[a].field_options[h]==s&&(d=1==e.prop("checked"),n.toggle_fields(e,o,a,i,d));else if($.isArray(s)){d=!1;for(var f=0;f<s.length;f++){if($.inArray(s[f],n.groups[t[l]].attach_params.fields[a].field_options)>=0)d=!0;else for(var p in n.groups[t[l]].attach_params.fields[a].field_options)s[f]==n.groups[t[l]].attach_params.fields[a].field_options[p]&&(d=!0);n.toggle_fields(e,o,a,i,d,s)}}else if(e.is('input[type="radio"]'))if($.isArray(n.groups[t[l]].attach_params.fields[a].field_options))d=$.inArray(s,n.groups[t[l]].attach_params.fields[a].field_options)>=0,n.toggle_fields(e,o,a,i,d);else for(var u in n.groups[t[l]].attach_params.fields[a].field_options)d=n.groups[t[l]].attach_params.fields[a].field_options[u]==s,n.toggle_fields(e,o,a,i,d);else if($.isArray(n.groups[t[l]].attach_params.fields[a].field_options))d=$.inArray(s,n.groups[t[l]].attach_params.fields[a].field_options)>=0,n.toggle_fields(e,o,a,i,d);else{d=!1;for(var g in n.groups[t[l]].attach_params.fields[a].field_options)n.groups[t[l]].attach_params.fields[a].field_options[g]==s&&(d=!0),n.toggle_fields(e,o,a,i,d)}}else e.is('input[type="checkbox"]')&&r[c].field_id==a&&(1==e.prop("checked")?n.toggle_fields(e,o,a,i,!0):n.toggle_fields(e,o,a,i,!1))}},toggle_fields:function(t,e,a,i,r,o){var d,n,s,l,c,h=this,a=parseInt(a),f=t.parents(h.field).attr("data-group-id"),i=parseInt(i),p=[],u=[],g=[];return t.parents(h.field).hasClass("g-form-field--cloned")&&(a=t.parents(h.field).attr("data-field-id")),!!e&&void(1==r?(e.attr("linked-to")?e.each(function(){c=$(this).attr("linked-to"),p=c+","+a,$.each(p.split(","),function(t,e){$.inArray(e,u)===-1&&u.push(e)}),$(this).attr("linked-to",u.toString())}):e.each(function(){$(this).attr("linked-to",a)}),e.attr("link-"+a)?e.each(function(){o?0==o?d=0:o.length&&(d=1==o.length?1:0):d=parseInt($(this).attr("link-"+a))+1,$(this).attr("link-"+a,d)}):e.each(function(){$(this).attr("link-"+a,1)}),1==i?(e.removeClass("hidden"),h.toggleFieldsRequire(e,"add"),e.each(function(){$(this).hasClass("dublicator")||(n=parseInt($(this).attr("data-field-id")),s=$(h.form).find("#dep_"+n),s.val("shown"))})):(e.addClass("hidden"),h.toggleFieldsRequire(e,"remove"),e.each(function(){$(this).hasClass("dublicator")||(n=parseInt($(this).attr("data-field-id")),s=$(h.form).find("#dep_"+n),s.val("hidden"))}))):e.each(function(){if($(this).attr("linked-to")){c=$(this).attr("linked-to").split(","),d=parseInt($(this).attr("link-"+a)),d=d<=0||!d?0:parseInt($(this).attr("link-"+a))-1,$(this).attr("link-"+a,d),0==d&&$(this).removeAttr("link-"+a);for(var t=0;t<c.length;t++)c[t]==a&&0==d&&delete c[t];$(this).attr("linked-to",c.toString().replace(/^,|,$/g,"")),""==$(this).attr("linked-to")&&(1==i?($(this).addClass("hidden"),h.toggleFieldsRequire(e,"remove"),$(this).hasClass("dublicator")||(n=parseInt($(this).attr("data-field-id")),s=$(h.form).find("#dep_"+n),s.val("hidden"))):($(this).removeClass("hidden"),h.toggleFieldsRequire(e,"add"),$(this).hasClass("dublicator")||(n=parseInt($(this).attr("data-field-id")),s=$(h.form).find("#dep_"+n),s.val("shown"))))}else 1==i?($(this).addClass("hidden"),h.toggleFieldsRequire(e,"remove"),$(this).hasClass("dublicator")||(n=parseInt($(this).attr("data-field-id")),s=$(h.form).find("#dep_"+n),s.val("hidden"))):($(this).removeClass("hidden"),h.toggleFieldsRequire(e,"add"),$(this).hasClass("dublicator")||(n=parseInt($(this).attr("data-field-id")),s=$(h.form).find("#dep_"+n),s.val("shown")));if($(this).attr("data-call-groups")){l=$(this).attr("data-call-groups").split(",");for(var r=0;r<l.length;r++)l[r]!=f&&g.push(l[r]);h.checkForSubDependence(g.toString())}else h.checkForSubDependence($(this).attr("data-call-groups"));$(this).removeAttr("link-"+$(this).attr("data-field-id")),$(this).find('input[type="radio"], input[type="checkbox"]').prop("checked",!1).end().find("select").val("")}))},checkForSubDependence:function(t){var e,a,i,r=this;if(!t)return!1;t=t.split(",");for(var o in t)if(e=$(r.form).find(r.field+'[data-group-id="'+t[o]+'"]'),a=e.attr("data-field-id"),i=e.attr("data-group-id"),dep_field_cond=$(r.form).find("#dep_"+a),r.groups[e.attr("data-group-id")]){1==r.groups[e.attr("data-group-id")].attach_params.dependence?(e.addClass("hidden"),dep_field_cond.length&&dep_field_cond.val("hidden")):2==r.groups[e.attr("data-group-id")].attach_params.dependence&&(e.removeClass("hidden"),dep_field_cond.length&&dep_field_cond.val("shown")),e.find('input[type="radio"], input[type="checkbox"]').prop("checked",!1).end().find("select").val(""),e.removeAttr("linked-to");for(var d in r.groups[e.attr("data-group-id")].attach_params.fields)e.removeAttr("link-"+d);r.checkForSubDependence(e.attr("data-call-groups"))}},toggleFieldsRequire:function(t,e){return!(!t||!e)&&void("add"==e?t.each(function(){$(this).hasClass("dublicator")||$(this).find(".g-form-control--required").attr("required","required")}):"remove"==e&&t.each(function(){$(this).hasClass("dublicator")||$(this).find(".g-form-control--required").removeAttr("required")}))},toggleCheckboxRequire:function(t){if(!t)return!1;var e=this,a=$(t).find('input[type="checkbox"]').attr("name"),i=$(e.form).find('input[type="checkbox"][name="'+a+'"]'),r=!1;setTimeout(function(){i.each(function(){if(1==$(this).prop("checked"))return r=!0,!1}),1==r?i.removeAttr("required"):i.attr("required","required")},200)},toggleFieldError:function(t,e){if(!t)return!1;var a=$(t).parents(".g-form-control-value"),i=a.find(".g-form-field__error");"show"==e?i.show():"hide"==e&&i.hide()},getAnketaStructure:function(){var t=this,e={},a={};if(!t.anketa_id)return s3.alert("No anketa_id"),!1;e.rows={},e.fields={},e.dublicators={},$(t.form).find(t.row_box).each(function(){var a=$(this).index();if(e.rows[a]={},$(this).attr("data-cols")){parseInt($(this).attr("data-cols"))}else;e.rows[a].cols={},$(this).find(t.row).each(function(){var i=$(this).index();e.rows[a].cols[i]={},e.rows[a].cols[i].width=$(this).width(),e.rows[a].cols[i].sub_rows={},$(this).find(".g-form-row__subrow").each(function(){var r=$(this).index();e.rows[a].cols[i].sub_rows[r]={},e.rows[a].cols[i].sub_rows[r].fields={},$(this).find(t.field).each(function(){var t,o=$(this).attr("data-field-id"),d=parseInt($(this).attr("data-field-type")),n=$(this).index(),s=$(this).attr("data-group-id");t={index:n,row:a,col:i,sub_row:r,group_id:s},0==d?(e.dublicators[o]=t,e.dublicators[o].type_code="DUBLICATOR",e.dublicators[o].type_id="0",e.dublicators[o].dictionary_id=o):e.fields[o]=t,$(this).attr("data-group-id")&&(0==d?e.dublicators[o].group_id=$(this).attr("data-group-id"):e.fields[o].group_id=$(this).attr("data-group-id"))})})})}),$(t.form).find("#anketa_structure").val(JSON.stringify(e));var i,r;$(t.form).find(t.field).each(function(){i=$(this).attr("data-field-id"),$(this).find(".g-form-control-value").each(function(){$(this).is('input[type="radio"]')||$(this).is('input[type="checkbox"]')?1==$(this).prop("checked")&&(r=$(this).val(),a[i]&&""!=a[i]?a[i]+=","+r:a[i]=r):""!=$(this).val()&&(r=$(this).val(),a[i]=r)})}),$(t.form).find("#anketa_results").val(JSON.stringify(a))}}}});