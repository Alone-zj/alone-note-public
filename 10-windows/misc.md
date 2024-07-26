

删除缓存文件解决自带输入法卡顿

```
C:\Users\Alone\AppData\Roaming\Microsoft\InputMethod\Chs

del %USERPROFILE%\AppData\Roaming\Microsoft\InputMethod\Chs\*.tmp
```

安装PowerDesigner后，电脑屏幕右键新建出现的多余选项

Win10下如何在右键新建菜单中添加.md文件？

右键armourycrate怎么删



开机自启(任务管理器->启动->启动类型为注册表)

```
表示任何账户每一次登陆到Windows系统都会自动启动在这个项下面注册的程序
计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run

表示当前账户下一次登陆到Windows系统会自动启动在这个项下面注册的程序，以后就不会自启了
计算机\HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Run

计算机\HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Compatibility Assistant\Store

计算机\HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Run
```



开机自启文件夹

```
C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp
```

sublime 按Esc后进入command mode模式



使用Sublime Text 3保存，javac编译时出现警告：编码GBK的不可映射字符
https://www.sublimetext.com/docs/build_systems.html#basic-example

java.sublime-build

```
{
    // javac编译需要指定编码，否则会出现编码错误
    "cmd": ["javac","-encoding","utf8", "$file_name", "&&", "start","cmd", "/k", "java", "$file_base_name"],
    "shell": true,
    "file_regex": "^(...*?):([0-9]*):?([0-9]*)",
    "working_dir": "$file_path",
    "selector": "source.java",
    "encoding": "GBK",
    "variants": [
        {
            "name": "Terminal",
            "cmd": ["javac", " $file_name", "&&", "start","cmd", "/k", "java", "$file_base_name"],
            "shell_cmd": "",
        },
        {
            "name": "Build",
            "quiet": true,
            "shell_cmd": "javac -encoding utf8 $file_name && java $file_base_name && del $file_base_name.class",
        }
    ]
}
```

参考:https://blog.csdn.net/m0_73613426/article/details/131616419
https://zhuanlan.zhihu.com/p/25820430





windows安装 OpenSSL、生成伪证书

```
// 生成一个RSA私钥
# openssl genrsa -des3 -out server.ori.key 2048
.... // 自行加密，密码会用于下面
// 生成免密码输入key
# openssl rsa -in server.ori.key -out server.key
// 创建证书签名请求CSR文件
# openssl req -new -key server.key -out server.csr
... // 填写一些信息，可随意填写，但请记住填写的内容 cn\hn\cs\alone
// 制作CA证书
# openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt

// 所有操作完成后会生成四个文件： server.crt、server.csr、server.key、server.ori.key
```



本地windows控制台登录虚拟机

```
ssh root@192.168.10.100
```



```
计算机\HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\FileExts\.md
```





win10系统下载网站
https://www.microsoft.com/zh-cn/software-download/windows10

是否希望在你的电脑上安装Windows10 ->立即下载工具->运行->准备一个空的u盘 点击为另外一天电脑安装。





windows AppData文件夹

`AppData` 文件夹用来存储特定用户的数据, 它是个隐藏文件夹。

- `local`：通常用来存储仅保存在一台 pc 上的数据，这些数据不会被漫游。

- `LocalLow`：和 local 类似，不会被漫游，现在不常用。
- `Roaming`：如果您的PC连接到具有漫游配置文件的域，则漫游文件夹包含将使用用户帐户从计算机“漫游”到计算机的数据。



查看具体端口的PID 占用端口

```
netstat -ano | findstr [端口号]
```

资源管理器删除程序



无界鼠标

[PowerToys 无边框鼠标 | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/powertoys/mouse-without-borders)



### 管理员方式安装msi程序

```
msiexec /package "d:\Downloads\MouseWithoutBordersSetup.msi"
```

![image-20240725093902698](./img/misc.assets/image-20240725093902698.png)

资源管理器复制路径

![image-20240725094052249](./img/misc.assets/image-20240725094052249.png)


shublime text 设置

```
{
	"font_face":"宋体",
	"ignored_packages":
	[
		"Package Control",
		"Vintage"
	],
	"index_files":false,
	"font_size": 14,
	"default_encoding":"UTF-8",
	"show_encoding":true,
	"show_line_endings":true,
}
```

