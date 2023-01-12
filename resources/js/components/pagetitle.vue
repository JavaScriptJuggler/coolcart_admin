<template>
    <div class="pagetitle">
        <h1>{{ pagename }}</h1>
    </div>
</template>
<script>
export default {
    name: "pagetitle",
    props: {
        'pagename': String,
    }
};
</script>
