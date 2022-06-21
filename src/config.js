import Cookies from 'js-cookie'
const JWT_TOKEN = Cookies.get('jwt_token')

// eslint-disable-next-line no-unused-vars
const URL_START = 'https://alpha.coinspacex.co/'
const API_URL = {
    secure_investment_calculator: URL_START + 'secure/investment_calculator',
    secure_earnings_summary: URL_START + 'secure/earnings',
    secure_investment_history: URL_START + 'secure/investment',
    secure_referral_income: URL_START + 'secure/incomes?income_type=REFERRAL',
    secure_staking_income: URL_START + 'secure/incomes?income_type=STAKING',
    secure_level_income: URL_START + 'secure/incomes?income_type=LEVEL',
    secure_withdraw_history: URL_START + 'secure/withdrawals',
    secure_team: URL_START + 'secure/team',
    my_dlb: URL_START + 'secure/dlb',
    get_profile: URL_START + 'secure/profile',
    set_profile: URL_START + 'secure/profile',
    earning_summary: URL_START + 'secure/earnings',
    fetch_investor_summary: URL_START + 'secure/investor',
    bv: URL_START + 'secure/bv',
    login: URL_START + 'login',
    register: URL_START + 'register',
    withdraw_now: URL_START + 'secure/withdraw',
    withdraw_otp: URL_START + 'secure/otp',
    validate_investment: URL_START + 'secure/validate_investment',
    validate_joining: URL_START + 'valid_joining',
    invest: URL_START + 'secure/invest',
    dsf_price: URL_START + 'dsf_price',
    validate_migration: URL_START + 'secure/validate_migration',
};
export {JWT_TOKEN, API_URL};
