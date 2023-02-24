/**
 * 重置 Antd Form VaildateInfos 为 I18n
 * @author LiQingSong
 */
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
export default function useI18nAntdFormVaildateInfos(infos) {
    const { t } = useI18n();
    const infosNew = computed(() => {
        const vInfos = {};
        for (const index in infos) {
            vInfos[index] = JSON.parse(JSON.stringify(infos[index]));
            if (vInfos[index] && vInfos[index]['help']) {
                vInfos[index]['help'] = vInfos[index]['help'].map((item) => typeof (item) == 'string' ? t(item) : item.map((item2) => item2 ? t(item2) : ''));
            }
        }
        return vInfos;
    });
    return infosNew;
}
//# sourceMappingURL=useI18nAntdFormVaildateInfos.js.map