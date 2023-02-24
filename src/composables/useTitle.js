/**
 * 设置 html Title  composables
 * @author LiQingSong
 */
import { onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import settings from '@/corePage/config/settings';
export default function useTitle(route) {
    const { t } = useI18n();
    const setTitle = (title) => {
        document.title = `${t(title)} - ${settings.siteTitle}`;
    };
    watch(route, () => {
        setTitle(route.value.title || '');
    });
    onMounted(() => {
        setTitle(route.value.title);
    });
}
//# sourceMappingURL=useTitle.js.map