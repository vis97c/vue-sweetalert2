import Vue from 'vue';
import {SweetAlertOptions} from 'sweetalert2/dist/sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2';
declare type VueSwalInstance = typeof Swal.fire;
declare module 'vue/types/vue' {
    interface Vue {
        $swal: VueSwalInstance;
    }
    interface VueConstructor<V extends Vue = Vue> {
        swal: VueSwalInstance;
    }
}
interface VueSweetalert2Options extends SweetAlertOptions {}
declare class VueSweetalert2 {
    static install(vue: Vue | any, options?: VueSweetalert2Options): void;
}
export default VueSweetalert2;
