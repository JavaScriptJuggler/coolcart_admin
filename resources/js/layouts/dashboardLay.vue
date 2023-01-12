<template>
    <div>
        <headerBar></headerBar>
        <sidebar></sidebar>
        <pagetitle></pagetitle>
        <main id="main" class="main">
            <pagetitle :pagename = '$route.meta.pagename'></pagetitle>
            <section class="section dashboard">
                <div class="row">
                    <router-view></router-view>
                </div>
            </section>
        </main>
        <footerBar></footerBar>
    </div>
</template>
<script>
import headerBar from "../components/header.vue";
import sidebar from "../components/sidebar.vue";
import footerBar from "../components/footerbar.vue";
import pagetitle from "../components/pagetitle.vue";
export default {
    name: "dashboardLay",
    components: {
        headerBar,
        sidebar,
        footerBar,
        pagetitle
    }
};
</script>
