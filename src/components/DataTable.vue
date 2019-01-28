<template>
  <div style="padding:10px;">
    <div >
      <div style="margin-bottom:10px;display:inline-block;margin-right:1em">
        <Label for="t1" align="left">First Name:</Label>
        <TextBox inputId="t1" v-model="fname" iconCls="icon-man" placeholder="First name"></TextBox>
      </div>
      <div style="margin-bottom:10px;display:inline-block">
        <Label for="t2" align="left">Last Name:</Label>
        <TextBox inputId="t2" v-model="lname" placeholder="Last name"></TextBox>
      </div>
      <LinkButton iconCls="icon-search" style="width:80px">Search</LinkButton>
    </div>
    <DataGrid :data="data" :multiSort="true" :pagination="true"
              :total="total"
              :pageSize="pageSize"
              :pagePosition="pagePosition">
      <GridColumn align="center" title="序号" cellCss="datagrid-td-rownumber" width="40">
        <template slot="body" slot-scope="scope">
          {{scope.rowIndex + 1}}
        </template>
      </GridColumn>
      <GridColumn align="center"  title="选择" width="40">
        <template slot="body" slot-scope="scope">
          <CheckBox />
        </template>
      </GridColumn>
      <GridColumn :expander="true" width="30"></GridColumn>
      <GridColumn field="itemid" title="Item ID" :sortable="true"></GridColumn>
      <GridColumn field="name" title="Name" :sortable="true">
        <template slot="body" slot-scope="scope">
          <span class=" glyphicon glyphicon-user" aria-hidden="true"></span>
          {{scope.row.name}}
        </template>
      </GridColumn>
      <GridColumn field="listprice" title="List Price" align="right" :sortable="true"></GridColumn>
      <GridColumn field="unitcost" title="Unit Cost" align="right">
        <template slot="body" slot-scope="scope">
          <div class="progress" style="margin:10px auto;">
            <div class="progress-bar progress-bar-striped active" role="progressbar"  :style="'width:'+scope.row.unitcost+'%'">
              {{scope.rowIndex + 1}}%
            </div>
          </div>
        </template>
      </GridColumn>
      <GridColumn field="attr" title="Attribute" width="30%"></GridColumn>
      <GridColumn field="status" title="Status" align="center"></GridColumn>
      <template slot="detail" slot-scope="scope">
        <div class="item f-row">
          <div><img class="item-img" :src="'https://www.jeasyui.com/tutorial/datagrid/images/'+scope.row.itemid+'.png'">
          </div>
          <div class="f-column">
            <div class="item-desp f-full">Attribute: {{scope.row.attr}}</div>
            <div class="item-desp f-full">Status: {{scope.row.status}}</div>
          </div>
        </div>

      </template>
    </DataGrid>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        total: 10000,
        pageSize: 20,
        data: [],
        pagePosition: "bottom",
        pageOptions: [
          {value: "bottom", text: "Bottom"},
          {value: "top", text: "Top"},
          {value: "both", text: "Both"}
        ],
        data: [],
        fname: "",
        lname: ""
      };
    },
    created() {
      this.data = [
        {
          code: "FI-SW-01",
          name: "Koi",
          unitcost: 10.0,
          status: "P",
          listprice: 36.5,
          attr: "Large",
          itemid: "EST-1"
        },
        {
          code: "K9-DL-01",
          name: "Dalmation",
          unitcost: 12.0,
          status: "P",
          listprice: 18.5,
          attr: "Spotted Adult Female",
          itemid: "EST-2"
        },
        {
          code: "RP-SN-01",
          name: "Rattlesnake",
          unitcost: 12.0,
          status: "P",
          listprice: 38.5,
          attr: "Venomless",
          itemid: "EST-3"
        },
        {
          code: "RP-SN-01",
          name: "Rattlesnake",
          unitcost: 12.0,
          status: "P",
          listprice: 26.5,
          attr: "Rattleless",
          itemid: "EST-4"
        },
        {
          code: "RP-LI-02",
          name: "Iguana",
          unitcost: 12.0,
          status: "P",
          listprice: 35.5,
          attr: "Green Adult",
          itemid: "EST-5"
        },
        {
          code: "FL-DSH-01",
          name: "Manx",
          unitcost: 12.0,
          status: "P",
          listprice: 158.5,
          attr: "Tailless",
          itemid: "EST-6"
        },
        {
          code: "FL-DSH-01",
          name: "Manx",
          unitcost: 12.0,
          status: "P",
          listprice: 83.5,
          attr: "With tail",
          itemid: "EST-7"
        },
        {
          code: "FL-DLH-02",
          name: "Persian",
          unitcost: 12.0,
          status: "P",
          listprice: 23.5,
          attr: "Adult Female",
          itemid: "EST-8"
        },
        {
          code: "FL-DLH-02",
          name: "Persian",
          unitcost: 12.0,
          status: "P",
          listprice: 89.5,
          attr: "Adult Male",
          itemid: "EST-9"
        },
        {
          code: "AV-CB-01",
          name: "Amazon Parrot",
          unitcost: 92.0,
          status: "P",
          listprice: 63.5,
          attr: "Adult Male",
          itemid: "EST-10"
        }
      ];
    }
  };
</script>
<style>
  .item {
    height: 60px;
    margin: 6px 30px;
    text-align: left;
  }

  .item-img {
    width: 60px;
    height: 60px;
  }

  .item-desp {
    line-height: 30px;
  }
</style>
