jQuery(function(t){t(".sp-pagebuilder-core-options-toggler").on("click",function(e){e.preventDefault(),t(".sp-pagebuilder-core-options").toggleClass("active")});var a={};t.fn.openPopupAlt=function(){t("#page-options").addClass("sp-pagebuilder-modal-overlay-after-open"),t("#page-options").addClass("sppb-modal-only-ext"),t("#page-options").find(".sp-pagebuilder-modal-content").addClass("sp-pagebuilder-modal-content-after-open"),t("body").addClass("sp-pagebuilder-modal-open"),t(".sp-pagebuilder-modal-alt .form-group").find(">input,>textarea,>select").each(function(){a[t(this).attr("id")]=t(this).val()})},t.fn.closePopupAlt=function(e){var o=t.extend({reset:!1},e);return t("#page-options").addClass("sp-pagebuilder-modal-overlay-before-close"),t("#page-options").find(".sp-pagebuilder-modal-content").addClass("sp-pagebuilder-modal-content-before-close"),t("#page-options").removeClass("sp-pagebuilder-modal-overlay-before-close sp-pagebuilder-modal-overlay-after-open"),t("#page-options").find(".sp-pagebuilder-modal-content").removeClass("sp-pagebuilder-modal-content-before-close sp-pagebuilder-modal-content-after-open"),t("body").removeClass("sp-pagebuilder-modal-open"),o.reset&&t(".sp-pagebuilder-modal-alt .form-group").find(">input,>textarea,>select").each(function(){t(this).val(a[t(this).attr("id")]),"jform_og_image"==t(this).attr("id")&&""!=a[t(this).attr("id")]&&t(this).prev(".sppb-media-preview").removeClass("no-image").attr("src",pagebuilder_base+a[t(this).attr("id")])}),this},t(document).on("click","#btn-page-options",function(e){e.preventDefault(),t().openPopupAlt()}),t(document).on("click",".sp-pagebuilder-modal-alt .sp-pagebuilder-modal-content-after-open",function(e){e.target===this&&t().closePopupAlt({reset:!0})}),t(document).on("click","#btn-cancel-page-options",function(e){e.preventDefault(),t().closePopupAlt({reset:!0})}),t(document).on("click","#btn-apply-page-options",function(e){e.preventDefault(),t().closePopupAlt(),t("#sp-pagebuilder-css",window.frames["sp-pagebuilder-view"].window.document).text(t("#jform_css").val())})});