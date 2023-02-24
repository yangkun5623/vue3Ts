<template>
    <router-link to="/" class="universallayout-top-message">
      <icon-svg type="message"  :style="{ fontSize: '16px' }"></icon-svg>
      <a-badge
        class="universallayout-top-message-badge"
        :count="message"
        :numberStyle="{ boxShadow: 'none', height: '15px', 'line-height': '15px' }"
      />
    </router-link>
</template>
<script lang="ts" setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { StateType as UserStateType } from "@/corePage/store/user";
import IconSvg from "@/corePage/components/IconSvg/index";

const store = useStore<{user: UserStateType}>();

const message = computed<number>(()=> store.state.user.message);

onMounted(()=>{
    store.dispatch("user/fetchMessage");
})
</script>
