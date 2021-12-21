export default {
  langs: [
    { label: 'English', value: 'en-US' },
    { label: '中文', value: 'zh-CN' },
    { label: 'ภาษาไทย', value: 'th-TH' },
    { label: 'ViệtName', value: 'vi-VN' },
  ],
  stateList: [
    { value: '00', label: 'New' },
    { value: '01', label: 'Cargo Resreved' },
    { value: '02', label: 'Cargo Picked' },
    { value: '03', label: 'Cargo Loaded' },
    { value: '05', label: 'Cargo Transfered' },
    { value: '06', label: 'Cargo Shipped' },
    { value: '066', label: '许可已核销' },
    // { value: '07', label: '国内已报关' },
    { value: '070', label: '国内可提柜' },
    { value: '071', label: '到达堆场' },
    { value: '08', label: '国内待发运' },
    { value: '09', label: '国内已验货' },
    { value: '10', label: '国内已提货' },
    { value: '11', label: '国内待转柜' },
    { value: '12', label: '国内已发运' },
    { value: '13', label: '国内已到达' },
    { value: '14', label: '国内已收货' },
    { value: '15', label: '已还箱' },
  ],
  layout: {
    header: {
      logout: 'Log out',
      changePassword: 'Change password',
      logoutTips: 'Confirm to log out',
      ok: 'Confirm',
      cancel: 'Exit',
      changeSuccess: 'Update successfully',
      pwdDifferent: 'Entered passwords differ',
      firstPwdTips: 'Plsase change your password when first log in.',
      pwdEdit: 'Change password',
      oldPassword: 'Old password',
      newPassword: 'New password',
      confirmPassword: 'Confirm password ',
      pleaseEnterANewPassword: 'New password',
      pleaseEnterThePasswordAgain: 'New password',
    },
    title: 'GSCM of Hongjiu Fruit ',
  },
  login: {
    login: 'Log in',
    title: 'GSCM of Hongjiu Fruit ',
    username: 'Username',
    password: 'Password',
    record: '渝ICP备19002690号-7',
    slogan: '全球水果链，共享幸福果',
    sloganEn: 'WITH GLOBAL FRUIT CHAIN, WE SHARE THE FRUIT OF HAPPINESS.',
  },
  basicInfo: { sop: { xx: 'test' } },
  menu: {
    home: 'Home Page',
    basicInformationManagement: 'Basic Information',
    portManagement: 'Port Management',
    yardManagement: 'Port Warehouse',
    blacklistManage: 'Blacklist Management',
    SOPManagement: 'SOP Management',
    commodityManagement: 'Goods Management',
    licenseManagement: 'Quota Management',
    customerManagement: 'Customer Management',
    warehouseManagement: 'Depository Management',
    contractManagement: 'Contract Management',
    contractDetail: 'Contract Detail',
    internationalShipping: 'International Shipping',
    shippingSchedule: 'Cargo Plan',
    originBooking: 'Cargo Reserve',
    originLogisticsDelivery: 'Cargo Pick-up',
    originShipping: 'Cargo Head-transport',
    originDeclaration: 'Cargo Clearance',
    licenseVerification: '许可核销',
    domesticCustomsDeclaration: '国内报关',
    taxDeposit: '纳税放柜',
    shipmentAtPortOfEntry: '入境口岸发货',
    finalTransport: '尾程运输',
    shippingedit: '发货编辑',
    dataCheck: '资料核验',
    domesticDelivery: '国内发货',
    domesticShippingSchedule: '发货计划',
    receivingManagement: '收货管理',
    salesReceipt: '销地收货',
    financialManagement: '财务管理',
    salesOrderNumberManagement: '销售单号管理',
    AllotCostManagement: '调拨费用管理',
    qualityControl: '质量管理',
    biddingManage: '招投标管理',
    bidding: '招标',
    internationalSopView: '国际发货SOP查看',
    DomesticSopView: '国内发货SOP查看',
    reportCenter: '报表中心',
    internationalShipmentDetails: '国际发货明细',
    domesticShipmentDetails: '国内发货明细',
    internationalInTransitSummary: '国际在途汇总',
    internationalInTransitSnapshot: '国际在途快照',
    reportCenterBiddingPlan: 'reportCenterBiddingPlan',
    systemManagement: '系统管理',
    corporateOrganizationalStructureManagement: '企业组织结构管理',
    supplierManagement: '供应商管理',
    roleManagement: '角色管理',
    userManagement: '用户管理',
    clientManagement: 'Client Management',
    resourceManagement: 'Resource Management',
    addShippingSchedule: 'Create new task',
    edit: 'Edit',
    detail: 'Detail',
    bookingSpace: 'Book',
    pickup: 'Cargo pick-up',
    sendOut: 'Release cargo',
    customsClearance: 'Clearance',
    furtherInformation: 'Further documents',
  },
  common: {
    tableTotal: 'Total{value}tasks',
    required: 'Please select {value}',
    required1: 'Please enter {value}',
    uploadFiles: 'Drag or Click upload',
    all: 'All',
    editSuccess: 'Edit successfully.',
    addSuccess: 'Create successfully.',
  },
  internationalDelivery: {
    shippingSchedule: {
      cabinetBatchCode: 'Series',
      cabinetCode: 'Container',
      spu: 'Commodity',
      product: 'Category',
      productPlace: 'Origin',
      productRuleId: 'Rules of Series',
      contractCode: 'Contracts No.',
      contarctSurplusNum: 'Remaining numbers of Contracts.',
      deliveryMethod: 'Mode of Transport',
      arrivePort: 'Import Port ',
      headTransport: 'Export Transport Company',
      declareCompany: 'Export Forwarder',
      planStartTime: 'Planed Time of Cargo Transported ',
      createTime: 'Date of Creation',
      remark: 'Notes',
      state: 'Status',
      actions: 'To do',
      edit: 'Edit',
      rest: 'Reset',
      search: 'Search',
      add: 'Create',
      baseInfo: 'Basic Information',
      shippingMethod: 'Mode of Transport',
      newCount: 'No. of Cargos',
      shipperInformation: 'Consignor Information',
      shipmentId: 'Consignor',
      factoryId: 'Factory',
      consigneeInformation: 'Consignee Information',
      hjgp: 'Hongjiu Fruit',
      tradingParty: 'Consignee',
      receiverType: 'Customer Type',
      receiverId: 'Suggeted Customer',
      startPortId: 'Export Port',
      declareCompanyId: 'Export Forwarder',
      arrivePortId: 'Import Port',
      declarePortId: 'Clearance Place',
      domesticDeclareCompanyId: 'Import Forwarder',
      headTransportId: 'Export-transport Company',
      remarkLength: 'notes must within 5 characters',
      headTransportRemark: 'Transport Requirements',
      headTransportCost: 'HeadTransport Cost',
      exportInformation: 'Export Information',
      importInformation: 'Import Information',
      otherInformation: 'Other information',
      firstTripTransportationInformation: 'Head-transport Information ',
      saveAdd: 'Create',
      goback: 'Exit',
      saveEdit: 'Confirm',
    },
    originBooking: {
      cabinetBatchCode: 'Series',
      commodity: 'Category',
      exportPort: 'Export Port',
      exportDeclarationCompany: 'Export Forwarder',
      portOfEntry: 'Import Port',
      headTransportationCompany: 'Head-transport Information ',
      plannedDeliveryTime: 'Planed Time of Transported ',
      remarks: 'Notes',
      bookingTime: 'Time of Cargo Rservation',
      taskReceiveTime: 'The task receive time',
      status: 'Status',
      operating: 'To do',
      booking: 'Confirm',
      view: 'More',
      reset: 'Reset',
      inquire: 'Search',
      back: 'Back',
      submitBooking: 'Confirm',
      basicInformation: 'Basic Information',
      factoryContactP: 'Factory Contacts',
      factoryContact: 'Contact No.',
      bookingInformation: 'Vessel Inforamtion',
      pleaseEnterTheNameOfTheShip: 'Please enter',
      pleaseEnterTheNameOfShipNextIssue: 'Please enter',
      shipSName: 'Name of Vessel',
      shipNextIssue: 'Vessel series',
      pleaseChooseAShippingCompany: 'Please select',
      shippingCompany: 'Shipping Company',
      pleaseSelectThePlannedDepartureTime: 'Planned Time of Depature',
      plannedDepartureTime: 'Planned Time of Depature',
      pleaseSelectThePlannedArrivalTime: 'Planned Time of Arrival',
      plannedArrivalTime: 'Planned Time of Arrival',
      pickUpAddress: 'Place of Cargo Pick-up',
      pickupContact: 'Contacts of Cargo Pick-up',
      pickUpContactInformation: 'Tel. of Cargo Pick-up',
      pickUpFiles: 'Documents of Cargo Pick-up',
      errorChooseTimeHint: 'Arrival time must be greater than departure time',
    },
    originLogisticsDelivery: {
      cabinetBatchCode: 'Series',
      cabinetNumber: 'Container',
      shippingMethod: 'Mode of Transport',
      headTransportationCompany: 'Head-transport Information ',
      exportDeclarationCompany: 'Export Forwarder',
      factoryName: 'Factory',
      plannedDeliveryTime: 'Planed Time of Cargo Transported ',
      remarks: 'Notes',
      pickUpTime: 'Date of Cargo Pick-up',
      status: 'Status',
      operating: 'To do',
      carryCabinet: 'Get Cargo ',
      view: 'More',
      reset: 'Reset',
      inquire: 'Search',
      confirmDelivery: 'Confirm',
      return: 'Exit',
      basicInformation: 'Basic Information',
      customsBrokerContact: 'Export Forwarder Contacts',
      contactInformationOfCustomsBroker: 'Export Forwarder Tel.',
      pickUpInformation: 'Cargo Information',
      pickUpAddress: 'Address of Cargo Pick-up',
      pickupContact: 'Contacts of Cargo Pick-up',
      pickUpContactInformation: 'Cargo Pick-up Tel.',
      factoryInformation: 'Factory',
      factoryAddress: 'Address of Factory ',
      factoryContactP: 'Factory Contacts ',
      factoryContact: 'Factory Tel.',
      transportRequirements: 'Transport Requirements',
      driverVehicleInformation: 'Transport Information',
      pleaseEnterTheCabinetNumber: 'Please input container',
      driverSName: "Driver's Name ",
      pleaseEnterTheDriverSName: 'Please enter',
      driverPhone: "Drivel's Tel.",
      pleaseEnterTheDriverSPhoneNumber: 'Please enter',
      numberPlate: 'Plate No.',
      pleaseEnterTheLicensePlateNumber: 'Please enter',
      driverPhoto: 'Driver Photos',
    },
    originShipping: {
      counterTimes: 'Series',
      commodity: 'Category',
      exportPort: 'Export Port',
      portOfEntry: 'Import Port',
      headTransportationCompany: 'Head-transport Information ',
      plannedDeliveryTime: 'Planed Time of Transported ',
      remarks: 'Notes',
      bookingTime: 'Time of Cargo Rservation',
      status: 'Status',
      operating: 'To do',
      hairCabinet: 'Cargo Release',
      view: 'More',
      cabinetNumber: 'Container',
      deliveryTime: 'Date of Cargo Transported',
      reset: 'Reset',
      inquire: 'Search',
      confirmTheDeliveryCabinet: 'Confirm',
      return: 'Exit',
      basicInformation: 'Basic Information',
      exportDeclarationCompany: 'Export Forwarder',
      customsBrokerContact: 'Export Forwarder Contacts',
      contactInformationOfCustomsBroker: 'Export Forwarder TEL',
      driverVehicleInformation: 'Transport Information',
      driverSName: "Driver's Name ",
      pleaseEnterTheDriverSName: "Driver's Name ",
      driverPhone: "Drivel's Tel.",
      pleaseEnterTheDriverSPhoneNumber: "Drivel's Tel.",
      numberPlate: 'Plate No.',
      pleaseEnterTheLicensePlateNumber: 'Plate No.',
      driverPhoto: 'Driver Photos',
      handoverFiles: 'Receipt',
    },
    originDeclaration: {
      cabinetNumber: 'Container',
      spuInfo: 'Commodity',
      totalNetWeight: 'Total net weight',
      totalGrossWeight: 'Total gross weight',
      totalExportValue: 'Export value',
      totalImportValue: 'Import value',
      spuDetail: 'Commodity details',
      total: 'Total quantity',
      commodity: 'Category',
      shippingMethod: 'Mode of Transport',
      exportPort: 'Export Port',
      portOfEntry: 'Import Port',
      exportValue: 'Export Cargo Value',
      netWeight: 'Net Weight',
      grossWeight: 'Gross Weight',
      plannedDepartureTime: 'Planned Time of Depature',
      remarks: 'Notes',
      tag: 'Tag',
      customsClearanceTime: 'Date of Clearance',
      status: 'Status',
      operating: 'To do',
      additionalMaterials: 'Submit Documents',
      customsClearance: 'Declare',
      reset: 'Reset',
      inquire: 'Search',
      confirmSubmission: 'Declare',
      confirmCustomsDeclaration: 'Confirm',
      return: 'Back',
      submittedSuccessfully: 'Successful',
      basicInformation: 'Basic Information',
      cargoDeliveryInformation: 'Transport Information',
      cargoArrivalTime: 'Arrival time of Export Port',
      pleaseSelectThePlannedDepartureTime: 'Arrival time of Export Port',
      logisticsHandoverOrder: 'Delivery Recipt',
      customsInformation: 'Clearance Information',
      tagInformation: 'tag Information',
      billOfLadingNumber: 'Bill of Lading No.',
      pleaseEnterTheBillOfLadingNumber: 'Bill of Lading No.',
      exportDeclaration: 'Declaration for Exportation',
      pleaseSelectTheExportDeclarationForm: 'Declaration for Exportation',
      importDeclarationMaterials: 'Documents for Import',
      declarationInformationTemplateDownload: 'Template download of customs declaration documents',
      piece: 'Piece',
    },
  },
}