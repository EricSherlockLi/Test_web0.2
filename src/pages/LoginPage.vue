<template>
    <el-row class="login-container">
        <el-col :lg="16" class="left">
            <div>
                <div>欢迎光临</div>
                <div>欢迎学习测试开发课，这是测试开发平台</div>
            </div>
        </el-col>
        <el-col :lg="8" class="right">
            <h2 class="title">欢迎回来</h2>
            <div>
                <span class="line"></span>
                <span>账号密码登录</span>
                <span class="line"></span>
            </div>
            <el-form :model="form" class="w-[250px]">
                <el-form-item>
                    <el-input v-model="form.username" placeholder="请输入用户名">
                        <template #prefix>
                            <el-icon>
                                <User />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.password" placeholder="请输入密码">
                        <template #prefix>
                            <el-icon>
                                <Lock />
                            </el-icon>
                        </template>

                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button round type="primary" color="#626aef" @click="onSubmit" class="w-[250px]">登录</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>


<script setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
    username: '',
    password: '',
})

const onSubmit = () => {
    console.log('submit!')
}
</script>

<style>
.login-container {
    @apply min-h-screen bg-indigo-400;
}

.login-container .left,
.login-container .right {
    @apply flex items-center justify-center;
}

.login-container .right {
    @apply bg-indigo-50 flex-col;
}

.left>div>div:first-child {
    @apply font-bold text-5xl text-light-50 mb-4;
}

.left>div>div:last-child {
    @apply text-sm text-gray-200;
}

.right .title {
    @apply font-bold text-3xl text-gray-800;
}

.right>div {
    @apply flex items-center justify-center text-gray-300 space-x-2 my-5;
}

.right .line {
    @apply h-[1px] w-16 bg-gray-300;
}
</style>