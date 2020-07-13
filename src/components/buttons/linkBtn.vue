<template>
    <div class=" w-full flex justify-center sm:justify-end items-center pb-8">
        <g-link class="bg-transparent hoverGradiant text-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded"
                :to="linkBtn" title="To blog overview"
        >
            <slot></slot>
        </g-link>
    </div>
</template>

<script>
    export default {
        name: "linkBtn",
        props: {
            linkBtn: {
                type: String,
                required: true
            },
        },
    }
</script>

<style scoped>
    .hoverGradiant:hover {
        background: linear-gradient(90deg, #fbd2e0 0%, #fbc9fb 100%);
        color: #03120e;
    }
</style>
