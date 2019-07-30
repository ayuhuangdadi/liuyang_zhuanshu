'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/mainlist', controller.home.mainlist);
  router.get('/Logo', controller.foter.Logo)
  router.get('/Main', controller.foter.Main)
  router.get('/tabList', controller.home.tablist)
  router.get('/navlist', controller.gaishu.navlist)
  router.get('/tablist', controller.gaishu.tablist)
  router.get('/tabslist', controller.gaishu.tabslist)
  router.get('/kjnavlist', controller.kongjian.kjnavlist)
  router.get('/ketinglist', controller.kongjian.ketinglist)
  router.get('/woshilist', controller.kongjian.woshilist)
  router.get('/chufanglist', controller.kongjian.chufanglist)
  router.get('/weishenglist', controller.kongjian.weishenglist)
  router.get('/yangtailist', controller.kongjian.yangtailist)
  router.get('/quanwulist', controller.kongjian.quanwulist)
  router.get('/GongYiList', controller.gongyi.GongYiList)
  router.get('/jianlist', controller.yangban.jianlist)
};
