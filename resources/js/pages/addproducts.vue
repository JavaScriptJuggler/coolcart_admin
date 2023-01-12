<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Add Product</h5>
            <p class="card-text">When multiple sellers sell the same product through a single detail page, we combine
                and present the best product data to ensure customers get the best experience.</p>

            <div class="row" style="margin-top:3.5rem">
                <div class="col-md-3" style="margin-bottom:1.5rem">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="">
                        <label class="form-check-label" for="flexSwitchCheckChecked">Does the product have
                            variations?
                        </label>
                    </div>
                </div>
                <div class="col-md-3" style="margin-bottom:1.5rem">
                    <div class="form-group">
                        <input type="text" placeholder="Product Name" class="form-control">
                    </div>
                </div>
                <div class="col-md-3" style="margin-bottom:1.5rem">
                    <div class="form-group">
                        <input type="text" placeholder="Brand Name" class="form-control">
                    </div>
                </div>
                <div class="col-md-3" style="margin-bottom:1.5rem">
                    <div class="form-group">
                        <input type="text" placeholder="Brand Name (Optional)" class="form-control">
                    </div>
                </div>
                <div class="col-md-3" style="margin-bottom:1.5rem">
                    <div class="form-group">
                        <input type="text" placeholder="Brand Name (Optional)" class="form-control">
                    </div>
                </div>
                <div class="col-md-3" style="margin-bottom:1.5rem">
                    <div class="form-group">
                        <input type="text" placeholder="Brand Name (Optional)" class="form-control">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'addproducts',
}
</script>
