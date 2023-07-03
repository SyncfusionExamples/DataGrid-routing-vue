<template>
    <div class="col-lg-12 control-section">
        <div>
            <ejs-grid :dataSource="data">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width='150'></e-column>
                    <e-column field='OrderDate' headerText='Order Date' width='130' format="yMd"
                        textAlign='Right'></e-column>
                    <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
                </e-columns>
            </ejs-grid>
        </div>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from "../datasource";

Vue.use(GridPlugin);

export default Vue.extend({
    name: 'About',
    data: () => {
        return {
            data: data.slice(0, 5),
        };
    },
});
</script>
<style>
@import "https://cdn.syncfusion.com/ej2/bootstrap5.css";
</style>