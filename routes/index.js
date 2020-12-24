const express = require(`express`);
const router = express.Router();

router.get(`/`, (req, res, next) => res.render(`home`, { title: `Home` }));
router.get(`/rules`, (req, res, next) => res.render(`rules`, { title: `Rules` }));
router.get(`/staff`, (req, res, next) => res.render(`staff`, { title: `Staff` }));
router.get(`/faq`, (req, res, next) => res.render(`faq`, { title: `FAQ` }));
router.get(`/support`, (req, res, next) => res.render(`support`, { title: `Support` }));

module.exports = router;
