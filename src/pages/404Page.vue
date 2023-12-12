<template>
    <el-result icon="warning" title="404  Warning Tip" sub-title="Please follow the instructions">
        <template #extra>
            <!-- Add click the button back to Home -->
            <el-button type="primary" @click="$router.push('/')">Back to Home Page</el-button>
        </template>
    </el-result>
</template>