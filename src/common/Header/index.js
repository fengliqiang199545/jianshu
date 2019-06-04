import React, {Fragment} from 'react';
import {HeaderWrapper, Logo, Nav,NavItem,SearchInfo,SearchInfoTitle,SearchInfoSwitch,
    NavSearch,Addtion,Button,SearchWrapper,SearchInfoItem} from './style';
import {IconGlobal} from '../../statics/icon/iconfont';
import {CSSTransition} from  'react-transition-group';
import {connect} from 'react-redux';
import {actionCreator} from '../Header/store'


const getListArea=(props)=>{
    const pageList = [];
    const page = props.page;
    const totalPage = props.totalPage;
    const jsList = props.list.toJS();
    if (jsList.length){
        for (let i = (props.page - 1) * 5 ; i < props.page * 5 ; i++){
            pageList.push(
                <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
            )
        }
    }
      if (props.focused || props.mouseIn){
          return (
              <SearchInfo
                  onMouseEnter={props.handleMouseEnter}
                  onMouseLeave={props.handleMouseLeave}
              >
                  <SearchInfoTitle>
                      forTest
                      <SearchInfoSwitch onClick={()=>{props.handleSwitch(page,totalPage)}}>
                          Switch
                      </SearchInfoSwitch>
                  </SearchInfoTitle>
                  <div>
                      {
                          pageList
                      }
                  </div>
              </SearchInfo>
          )
      } else {
          return null;
      }
};

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
                        {getListArea(props)}
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
        list: state.get('header').get('list'),
        mouseIn: state.getIn(['header','mouseIn']),
        page: state.getIn(['header','page']),
        totalPage: state.getIn(['header','totalPage']),
    }
};
const mapDispatchToPropsJ=(dispatch)=>{
    return {
        handleInputFocus(){
            dispatch(actionCreator.getList());
            dispatch(actionCreator.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreator.blurFocus());
        },
        handleMouseEnter(){
            dispatch(actionCreator.changeMouseIn());
        },
        handleMouseLeave(){
            dispatch(actionCreator.changeMouseLeave())
        },
        handleSwitch(page,totalPage){
            if (page < totalPage){
                dispatch(actionCreator.switchPage(page+1));
            } else  {
                dispatch(actionCreator.switchPage(1))
            }
        }

    }
};
export default connect(mapStateToPropsJ,mapDispatchToPropsJ)(Header);