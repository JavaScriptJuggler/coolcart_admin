<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Add Product</h5>
      <p class="card-text">
        When multiple sellers sell the same product through a single detail page, we combine
        and present the best product data to ensure customers get the best experience.
      </p>

      <div class="row" style="margin-top:3.5rem">
        <div class="col-md-3" style="margin-bottom:1.5rem">
          <div class="form-group">
            <label for="product_id" class="form-label">
              <b>
                <i>Product ID</i>
              </b>
            </label>
            <input type="text" id="product_id" class="form-control" v-model="productForm.productID" />
          </div>
        </div>
        <div class="col-md-3" style="margin-bottom:1.5rem">
          <div class="form-group">
            <label for="item_name" class="form-label">
              <b>
                <i>Item Name</i>
              </b>
            </label>
            <input
              type="text"
              v-model="productForm.itemName"
              id="item_name"
              placeholder="Wood Table"
              class="form-control"
            />
          </div>
        </div>
        <div class="col-md-3" style="margin-bottom:1.5rem">
          <div class="form-group">
            <label for="brand_name" class="form-label">
              <b>
                <i>Brand Name</i>
              </b>
            </label>
            <input
              type="text"
              id="brand_name"
              placeholder="Brand Name (Optional)"
              class="form-control"
              v-model="productForm.brandName"
            />
          </div>
        </div>
        <div class="col-md-3" style="margin-bottom:1.5rem">
          <div class="form-group">
            <label for="included_components" class="form-label">
              <b>
                <i>Included Components</i>
              </b>
            </label>
            <input
              type="text"
              id="included_components"
              placeholder="battery Pack, Charger, Handset"
              class="form-control"
              v-model="productForm.includedComponents"
            />
          </div>
        </div>
        <div class="col-md-3" style="margin-bottom:1.5rem">
          <div class="form-group">
            <label for="size" class="form-label">
              <b>
                <i>Size</i>
              </b>
            </label>
            <input
              type="text"
              v-model="productForm.size"
              id="size"
              placeholder="Large"
              class="form-control"
            />
          </div>
        </div>
        <div class="col-md-3" style="margin-bottom:1.5rem">
          <div class="form-group">
            <label for="material_type" class="form-label">
              <b>
                <i>Material Type</i>
              </b>
            </label>
            <input
              type="text"
              v-model="productForm.materialType"
              id="material_type"
              placeholder="Wood"
              class="form-control"
            />
          </div>
        </div>
        <div class="col-md-3" style="margin-bottom:1.5rem">
          <div class="form-group">
            <label for="expirable" class="form-label">
              <b>
                <i>Is Product Expirable ?</i>
              </b>
            </label>
            <input
              type="text"
              id="expirable"
              placeholder="Included Components('battery Pack,Bag')"
              class="form-control"
              v-model="productForm.isExpirable"
            />
          </div>
        </div>
        <div class="col-md-3" style="margin-bottom:1.5rem">
          <div class="form-group">
            <label for="expiration_type" class="form-label">
              <b>
                <i>Product Expiration Type</i>
              </b>
            </label>
            <input
              type="text"
              id="expiration_type"
              placeholder="Included Components('battery Pack,Bag')"
              class="form-control"
              v-model="productForm.expirationType"
            />
          </div>
        </div>
        <div class="col-md-3" style="margin-bottom:1.5rem">
          <div class="form-group">
            <label for="central_shelf_life" class="form-label">
              <b>
                <i>Fulfillment Center Shelf Life (days)</i>
              </b>
            </label>
            <input
              type="text"
              v-model="productForm.FulfillmentCenterShelf"
              id="central_shelf_life"
              placeholder="365"
              class="form-control"
            />
          </div>
        </div>
        <div class="col-md-3" style="margin-bottom:1.5rem">
          <div class="form-group">
            <label for="number_of_items" class="form-label">
              <b>
                <i>Number of Items</i>
              </b>
            </label>
            <input
              type="text"
              v-model="productForm.numberOfItems"
              id="number_of_items"
              placeholder="1"
              class="form-control"
            />
          </div>
        </div>
      </div>
      <div class="row" style="margin-top:2.5rem">
        <h3 class="card-title">Variations</h3>
        <div class="col-md-12 d-flex text-center">
          <div class="form-check m-2">
            <input
              class="form-check-input"
              type="checkbox"
              value="1"
              id="style"
              v-on:click="variationChange($event)"
            />
            <label class="form-check-label" for="style">Style</label>
          </div>
          <div class="form-check m-2">
            <input
              class="form-check-input"
              type="checkbox"
              value="2"
              id="sizeCheck"
              v-on:click="variationChange($event)"
            />
            <label class="form-check-label" for="sizeCheck">Size</label>
          </div>
          <div class="form-check m-2">
            <input
              class="form-check-input"
              type="checkbox"
              value="3"
              id="no_of_items_check"
              v-on:click="variationChange($event)"
            />
            <label class="form-check-label" for="no_of_items_check">Number Of Items</label>
          </div>
          <div class="form-check m-2">
            <input
              class="form-check-input"
              type="checkbox"
              value="4"
              id="material_type_check"
              v-on:click="variationChange($event)"
            />
            <label class="form-check-label" for="material_type_check">Material Type</label>
          </div>
          <div class="form-check m-2">
            <input
              class="form-check-input"
              type="checkbox"
              value="5"
              id="width_of_item_check"
              v-on:click="variationChange($event)"
            />
            <label class="form-check-label" for="width_of_item_check">Width Of Item</label>
          </div>
          <div class="form-check m-2">
            <input
              class="form-check-input"
              type="checkbox"
              value="6"
              id="color_check"
              v-on:click="variationChange($event)"
            />
            <label class="form-check-label" for="color_check">Colour</label>
          </div>
          <div class="form-check m-2">
            <input
              class="form-check-input"
              type="checkbox"
              value="7"
              id="display_length_check"
              v-on:click="variationChange($event)"
            />
            <label class="form-check-label" for="display_length_check">Display Length</label>
          </div>
          <div class="form-check m-2">
            <input
              class="form-check-input"
              type="checkbox"
              value="8"
              id="display_height_check"
              v-on:click="variationChange($event)"
            />
            <label class="form-check-label" for="display_height_check">Display Height</label>
          </div>
          <div class="form-check m-2">
            <input
              class="form-check-input"
              type="checkbox"
              value="9"
              id="display_width_check"
              v-on:click="variationChange($event)"
            />
            <label class="form-check-label" for="display_width_check">Display Width</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "addproducts",
  data() {
    return {
      variaction_matchings: null,
      productForm: {
        productID: "",
        itemName: "",
        brandName: "",
        includedComponents: "",
        size: "",
        materialType: "",
        isExpirable: "",
        expirationType: "",
        FulfillmentCenterShelf: "",
        numberOfItems: ""
      }
    };
  },
  methods: {
    variationChange: function(event) {
      let clickedElement = event.target.value;
      let allChecks = document.querySelectorAll(".form-check-input");
      let selectedCheckBox = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      );
      console.log(selectedCheckBox.length);
      if (selectedCheckBox.length < 2) {
        this.variaction_matchings.forEach(element => {
          if (element.variaction === clickedElement) {
            let matching = element.matching_ids;
            allChecks.forEach(check => {
              if (event.target.checked == true) {
                if (
                  matching.includes(check.value) ||
                  check.value === clickedElement
                ) {
                  check.removeAttribute("disabled");
                } else {
                  check.setAttribute("disabled", "disabled");
                }
              }
              if (event.target.checked == false) {
                allChecks.forEach(checkElements => {
                  if (checkElements.checked == true) {
                    clickedElement = checkElements.value;
                    this.variaction_matchings.forEach(element => {
                      if (element.variaction === clickedElement) {
                        let matching = element.matching_ids;
                        allChecks.forEach(check => {
                          if (
                            matching.includes(check.value) ||
                            check.value === clickedElement
                          ) {
                            check.removeAttribute("disabled");
                          } else {
                            check.setAttribute("disabled", "disabled");
                          }
                        });
                      }
                    });
                  } else {
                    checkElements.removeAttribute("disabled");
                  }
                });
              }
            });
          }
        });
      } else {
        allChecks.forEach(element => {
          if (element.checked != true) {
            element.setAttribute("disabled", "disabled");
          }
        });
      }
    }
  },
  mounted() {
    axios
      .post(
        "/api/get-variaction-matchings",
        {},
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("AUTHTOKEN")}`
          }
        }
      )
      .then(response => {
        this.variaction_matchings = response.data.data;
        console.log(response.data.data);
      })
      .catch(function(error) {});
  }
};
</script>
