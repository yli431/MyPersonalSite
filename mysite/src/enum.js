//@footer.js
export let CopyrightType;

(function (CopyrightType) {
  CopyrightType['TYPE1'] = 'default';
  CopyrightType['TYPE2'] = 'type2';
  CopyrightType['TYPE3'] = 'type3';
})(CopyrightType || (CopyrightType = {}));

//@icon
export let IconType;

(function (IconType) {
  IconType['STROKE'] = 'stroke';
  IconType['FILL'] = 'fill';
  IconType['CUSTOM'] = 'custom';
})(IconType || (IconType = {}));

//@navbar.js
export let MegaMenuType;

(function (MegaMenuType) {
  MegaMenuType['MEGAMENU1'] = 'megamenu-1';
  MegaMenuType['MEGAMENU2'] = 'megamenu-2';
  MegaMenuType['MEGAMENU3'] = 'megamenu-3';
  MegaMenuType['MEGAMENU4'] = 'megamenu-4';
  MegaMenuType['MEGAMENU5'] = 'megamenu-5';
})(MegaMenuType || (MegaMenuType = {}));

//@root.js
export let DynamicComponentType;

(function (DynamicComponentType) {
  DynamicComponentType['IMAGE'] = 'images';
})(DynamicComponentType || (DynamicComponentType = {}));
