var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function() {
    var getUrl = window.location;
    var baseUrl = getUrl .protocol + "//" + getUrl.host;
    var fullFirstPath = window.location.href;

    var frURL = baseUrl + '/fr/' + getUrl.pathname.split('/')[1];
    if (window.navigator.language.indexOf('fr') === 0 && !fullFirstPath.includes('/fr/')) {
        window.location = frURL;
    }
})();


}
/*
     FILE ARCHIVED ON 03:28:29 Mar 05, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:31:53 Jun 11, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.46
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 56.392
  LoadShardBlock: 763.505 (3)
  PetaboxLoader3.resolve: 527.252 (3)
  PetaboxLoader3.datanode: 321.856 (4)
  load_resource: 203.159
*/