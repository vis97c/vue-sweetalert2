import Swal from 'sweetalert2/dist/sweetalert2';
var VueSweetalert2 = (function() {
    function VueSweetalert2() {}
    VueSweetalert2.install = function(vue, options) {
        var _swal = function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (options) {
                var mixed = Swal.mixin(options);
                return mixed.fire.apply(mixed, args);
            }
            return Swal.fire.apply(Swal, args);
        };
        var methodName;
        for (methodName in Swal) {
            if (
                Object.prototype.hasOwnProperty.call(Swal, methodName) &&
                typeof Swal[methodName] === 'function'
            ) {
                _swal[methodName] = function() {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return Swal[methodName].apply(Swal, args);
                };
            }
        }
        vue['swal'] = _swal;
        if (!vue.prototype.hasOwnProperty('$swal')) {
            vue.prototype.$swal = _swal;
        }
    };
    return VueSweetalert2;
})();
export default VueSweetalert2;
//# sourceMappingURL=index.js.map
