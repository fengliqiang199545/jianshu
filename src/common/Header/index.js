import React, {Fragment} from 'react';
import {HeaderWrapper, Logo, Nav,NavItem,NavSearch,Addtion,Button,SearchWrapper} from './style';
import {IconGlobal} from '../../statics/icon/iconfont';
import {CSSTransition} from  'react-transition-group';
import {connect} from 'react-redux';
import {actionCreator} from '../Header/store'
const Header =(props)=>{
    return (
        <Fragment>
            <IconGlobal/>
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={props.focused}
                            timeout={300}
                            classNames="slide"
                        >
                            <NavSearch
                                className={props.focused ? 'focused': ''}
                                onFocus={props.handleInputFocus}
                                onBlur={props.handleInputBlur}
                            />
                        </CSSTransition>
                        <span className={props.focused? 'focused iconfont':'iconfont'}>&#xe614;</span>
                    </SearchWrapper>
                </Nav>
                <Addtion>
                    <Button className='write'>
                        <span className="iconfont">&#xe639;</span>
                        write
                    </Button>
                    <Button className='signUp'>sign up</Button>
                </Addtion>
            </HeaderWrapper>
        </Fragment>
    )
};


const mapStateToPropsJ=(state)=>{
    return {
        focused: state.get('header').get('focused'),
    }
};
const mapDispatchToPropsJ=(dispatch)=>{
    return {
        handleInputFocus(){
            dispatch(actionCreator.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreator.blurFocus());
        }
    }
};
export default connect(mapStateToPropsJ,mapDispatchToPropsJ)(Header);