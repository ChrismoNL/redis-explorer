import "./menu.css";

import Toolbar, { Item } from "devextreme-react/toolbar";
import notify from "devextreme/ui/notify";
import "devextreme/ui/select_box";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import {
  initializeColor,
  setThemeColor,
} from "../../features/themeColor/themeColorSlice";

const MenuComponent = () => {
  const dispatch = useAppDispatch();
  const useDarkTheme = useAppSelector((state) => state.themeColor.useDarkTheme);

  const setUseDarkTheme = (value: boolean) => {
    dispatch(setThemeColor(value));
  };

  useEffect(() => {
    dispatch(initializeColor());
  }, []);

  const isInitialized = useAppSelector(
    (state) => state.rootPassword.isInitialized
  );
  const servers: any[] = [
    {
      id: 1,
      name: "Server 1",
    },
    {
      id: 2,
      name: "Server 2",
    },
  ];
  const addButtonOptions = {
    icon: "plus",
    name: "add-server",
    onClick: () => {
      notify("Add button has been clicked!");
    },
  };

  const selectBoxOptions = {
    width: "auto",
    maxWidth: 500,
    items: servers,
    valueExpr: "id",
    displayExpr: "name",
    value: servers[0].id,
    disabled: servers.length === 0,
    onValueChanged: (args: any) => {
      alert(`Selected server: ${args.value}`);
    },
  };

  return (
    <Toolbar>
      <Item location="before" locateInMenu="never">
        <div className="toolbar-label">
          <h1>
            <strong>Redis</strong>Explorer
          </h1>
        </div>
      </Item>
      {isInitialized === true && (
        <>
          <Item
            location="after"
            locateInMenu="auto"
            widget="dxSelectBox"
            options={selectBoxOptions}
          />
          <Item
            location="after"
            locateInMenu="auto"
            widget="dxButton"
            options={addButtonOptions}
          />
        </>
      )}
      <Item location="after" locateInMenu="auto">
        <div id="theme-switcher" className="theme-switch">
          <div
            className="theme-switch-button"
            onClick={() => setUseDarkTheme(!useDarkTheme)}
          >
            <div
              className="light-indicator"
              style={{
                left: !useDarkTheme ? 0 : "-26px",
                opacity: !useDarkTheme ? 1 : 0,
              }}
            ></div>
            <div
              className="dark-indicator"
              style={{
                left: useDarkTheme ? 0 : "26px",
                opacity: useDarkTheme ? 1 : 0,
              }}
            ></div>
          </div>
        </div>
      </Item>
    </Toolbar>
  );
};

export { MenuComponent };
