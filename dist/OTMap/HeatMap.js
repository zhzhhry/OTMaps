define(["OTMap/OTMap","OTMap/Utils/DrawUtil"],function(a,t){function r(t,r){a.apply(this,arguments),this.type="Heat"}return r.prototype=new a,r.prototype.draw=function(a){var r=this;return r.clear(),t.checkParams(r).createSLayer(r,function(){t.drawHeat(r),r.drawLayer.redraw(),r.backupConfig(),a&&a()}),r},r});