import { onMounted, onBeforeUnmount, shallowRef } from 'vue';
import debounce from 'lodash.debounce';
import * as echarts from 'echarts';
/**
 * Echarts composables
 * @param labRef Ref                 HTMLDivElement ref
 * @param initOption EChartOption    echarts option init
 * @param cb Function|undefined      回调函数 读取数据
 * @param theme string|undefined     使用的主题
 * @returns
 * @author LiQingSong
 */
export default function useEcharts(labRef, initOption, cb, theme = '') {
    const chart = shallowRef();
    const resizeHandler = debounce(() => {
        chart.value?.resize();
    }, 100);
    const callback = () => {
        if (typeof cb === 'function' && chart.value) {
            cb(chart.value);
        }
    };
    onMounted(() => {
        if (labRef.value) {
            chart.value = echarts.init(labRef.value, theme);
            chart.value.setOption(initOption);
            callback();
        }
        window.addEventListener('resize', resizeHandler);
    });
    onBeforeUnmount(() => {
        chart.value?.dispose();
        window.removeEventListener('resize', resizeHandler);
    });
    return {
        echart: chart,
        cb: callback
    };
}
//# sourceMappingURL=useEcharts.js.map