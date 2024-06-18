!function(e){window.newConfirm=function({title:i="提示",content:o="",ok:n=()=>{},cancle:c=()=>{}}){i=`
            <div class="confirm">
                <div class="confirm-mask"></div>
                <div class="confirm-content">
                    <div class="confirm-title">${i}</div>
                    <div class="confirm-body">${o}
                  
                    </div>
                  <div class="confirm-footer">
                        <div class="confirm-btns">
                    
                        <button class="confirm-ok common-btn primary" >确定</button>
                        <button class=" confirm-cancle common-btn" >取消</button>
</div>
                    </div> 
                </div>
            </div>
        `;e("body").append(i),e(".confirm-ok").click(function(){n(),e(".confirm").remove()}),e(".confirm-cancle").click(function(){c(),e(".confirm").remove()})},window.showMessage=function(i,o){history.replaceState(null,null,window.location.href.replace(/[\?&]success=[^&]*/,"").replace(/[\?&]message=[^&]*/,""));let n,c;"1"===i||1===i?(n="success",c=o||""):"0"!==i&&0!==i||(n="error",c=o||""),c&&(o=`
            <div class="message ${n}">
           ${"1"===i?'<i class="iconfont icon-checkgou"></i>':'<i class="iconfont icon-about"></i>'}   <div class="message-body">${c}</div>
            </div>
        `,e("body").append(o),setTimeout(()=>{e(".message").remove()},2e3))},window.previewImage=function(i){i=e(`
                        <img src="${i}" style="position: fixed; width: 100%; height: 100%; top: 0; left: 0; background : rgba(0,0,0,0.5); object-fit: contain; z-index: 90010192;">
            
            `).on("click",function(i){this.remove()});e("body").append(i)},window.previewVideo=function(i){i=e(`
            <div>
                <div class="mask" style="position: fixed; width: 100%; height: 100%; top: 0; left: 0; background : rgba(0,0,0,0.5); object-fit: contain; z-index: 90010191;"></div>
                <video src="${i}" style="position: fixed; width: 100%; height: 100%; top: 0; left: 0; background : rgba(0,0,0,0.5); object-fit: contain; z-index: 90010192;">
                </video>
            </div>
        `).on("click",function(i){this.remove()});e("body").append(i)}}(jQuery);