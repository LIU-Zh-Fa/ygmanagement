import { Menu } from 'antd';
import IconFont from '@common/iconfont'
import React from "react";
const { SubMenu } = Menu;
console.log(IconFont)
export default (sliderTabBars)=>sliderTabBars.map((item)=>{
    let fn = (child)=>{
        if(child){
            return <SubMenu
                        key={child.key}
                        title={
                        <span>
                            <IconFont type={child.icon} />
                            <span>{child.name}</span>
                        </span>
                        }
                    >
                    {
                        child.children.map((children)=>{
                            if(children.children){
                                return fn(children)
                            }
                            else{
                                return <Menu.Item key={children.key} ><IconFont type={children.icon} />{children.name}</Menu.Item>
                            }
                        })
                    }
                </SubMenu>
        }
    }

    if(item.children){
        return fn(item)
    }else{
        return <Menu.Item key={item.key}>
                    <IconFont type={item.icon} />
                    <span>{item.name}</span>
                </Menu.Item>
    }
})