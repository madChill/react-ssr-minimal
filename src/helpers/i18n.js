const lang = 'en';

const rules = {
    service404: {
        en: 'service not found',
        cn: '无法提供服务',
        default: 'null'
    }
};
const i18n = {};
Object.keys(rules).map((key) => {
    i18n[key] = rules[key][lang] || rules[key].default;
});

export default i18n;
