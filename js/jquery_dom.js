!function(s){window.newConfirm=function({title:o="提示",content:i="",ok:e=()=>{},cancle:c=()=>{},showFooter:n=!0}){o=`
            <div class="confirm">
                <div class="confirm-mask"></div>
                <div class="confirm-content">
                    <div class="confirm-title">${o}</div>
                    <div class="confirm-body">
                        ${i}
                    </div>
                    ${n?`
                               <div class="confirm-footer">
                                    <div class="confirm-btns">
                                        <button class="confirm-ok common-btn primary" >确定</button>
                                        <button class=" confirm-cancle common-btn" >取消</button>
                                    </div>
                                </div> 
                        `:""}
                </div>
            </div>
        `;s("body").append(o),s(".confirm-ok").click(function(){e(),s(".confirm").remove()}),s(".confirm-cancle").click(function(){"function"==typeof c&&c(),s(".confirm").remove()})},window.showMessage=function(o,i){history.replaceState(null,null,window.location.href.replace(/[\?&]success=[^&]*/,"").replace(/[\?&]message=[^&]*/,""));let e,c;"1"===o||1===o?(e="success",c=i||""):"0"!==o&&0!==o||(e="error",c=i||""),c&&(i=`
            <div class="message ${e}">
           ${"1"===o?'<i class="iconfont icon-checkgou"></i>':'<i class="iconfont icon-about"></i>'}   <div class="message-body">${c}</div>
            </div>
        `,s("body").append(i),setTimeout(()=>{s(".message").remove()},2e3))},window.closePreview=function(){s(event.target).closest(".common-preview").remove()},window.previewImage=function(o){o=s(`
            <div class="common-preview">
                <div class="close" style=""  onclick="closePreview()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#333" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>
                </div>
                <img class="media" src="${o}" style="">
            </div>
            `);s("body").append(o)},window.previewVideo=function(o){o=s(`
            <div class="common-preview">
                <div class="close" style="" onclick="closePreview()"><svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#333" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg></div>
                <video class="media" src="${o}" style="" controls>
                </video>
            </div>
        `);s("body").append(o)},window.bindFormSubmit=function(o,i,e){s(o).on("submit",function(o){o.preventDefault();o=o.target;s.ajax({url:o.action,type:o.method,data:new FormData(o),contentType:!1,processData:!1,success:i,fail:e})})},window.copyCode=async function(o){try{await navigator.clipboard.writeText(o)}catch(o){}}}(jQuery);