import styled from 'styled-components';
import logoPic from '../../statics/nav-logo.png';

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .iconfont{
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused {
            background: #999;
        };
    };
    .slide-enter {
        transition: all .3s ease-out;
    };
    .slide-enter-active {
        width: 240px;
    };
    .slide-exit {
        transition: all .3s ease-out;
    };
    slide-exit-active {
        width: 160px;
    }
    
`;


export const Button = styled.div`
    float: right;
    line-height: 38px;
    border-radius:19px;
    border: 1px solid #ec6149
    margin-right: 20px;
    margin-top: 9px;
    padding: 0 20px;
    font-size: 14px;
    &.signUp {
        color: #ec6149;
        
    };
    &.write {
        color: #fff;
        background: #ec6149;
    }
`;


export const Addtion = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
    height: 58px;
    width: 100px;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    // background: green;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box; 
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    };
    &.right {
        float: right;
        color: #969696;
    };
    &.active {
        color: #ea6f5a;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: 'search'
})`
    width: 160px;
    height: 38px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    margin-top: 9px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    font-size: 14px;
    margin-left: 20px;
    color: #666;
    &::placeholder{
        color: #999;
    };
    &.focused {
        width: 240px;
    }
`;

