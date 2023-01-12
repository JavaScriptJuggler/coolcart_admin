<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Add New Product</h5>
            <p class="card-text">When multiple sellers sell the same product through a single detail page, we combine
                and present the best product data to ensure customers get the best experience..</p>

            <div class="row mt-4">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-12" style="text-align:right;">
                            <button class=" btn btn-rounded btn-primary m-1">Add a Variation</button>
                            <button class=" btn btn-rounded btn-primary m-1" v-on:click="$router.push('/add-products')">Add New Product</button>
                            <button class=" btn btn-rounded btn-primary m-1">Preferences</button>
                        </div>
                        <div class="col-md-12 mt-4 " style="height:50vh;overflow-y:auto">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'inventory'
}
</script>
