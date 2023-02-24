import UserModel from "@/corePage/store/user";
import { hasPermissionRouteRoles } from "@/corePage/utils/routes";
const permission = (el, binding, vnode, prevVNode) => {
    const { value } = binding;
    if (value) {
        const userRoles = UserModel.state.currentUser.roles;
        if (!hasPermissionRouteRoles(userRoles, value)) {
            el.parentNode && el.parentNode.removeChild(el);
        }
    }
    else {
        throw new Error(`need roles! Like v-permission="['admin','test']" or v-permission="'test'"`);
    }
};
export default permission;
//# sourceMappingURL=index.js.map