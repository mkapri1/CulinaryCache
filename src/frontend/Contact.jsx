import { Link } from 'react-router-dom';
// src/App.js


// src/App.js



const About = () => {
  return (
    <div className="about-container">
        <nav className="navbar">
        <ul>
          <li><Link to="/homepage">Homepage</Link></li>
          <li><Link to="/creat-meal">Create Meal</Link></li>
          <li><Link to="/about">About</Link></li>
          
        </ul>
      </nav>
      <h2>Customer Service</h2>
      <p>
        Welcome to our Customer support page if you need any help please do not hesitate to call we have staffers working
        around the clock to make our application as easy as possible to use you can get in contact with us at 
        culinarycachesupport@gmail.com or by calling the toll free number 1-800-555-3535
      </p>
      <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHwAzwMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgECBAUHAwj/xABDEAABAwMCAwQHAwkHBQEAAAABAAIDBAURBiESMUEHE1FhFCJxgZGh0TKT0hYXQlJUVbHB8BUkM0NilPFTY4KDoiP/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAQIDBAUG/8QALREAAgIBBAICAAQGAwAAAAAAAAECAxEEEiExBUETUSIycaEUI2GBsdFS4fD/2gAMAwEAAhEDEQA/AO4oAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAICyWRsTHPkcGsaMlxOAAqykordLolJyeF2a+G+22aYRMqmlxOBkEA+8rUh5HTTltU+TZlor4x3OPBs8rdNUIAgCAIAgKZHigI9cdZ2K3TGGWs7yVpw5sLS/h9pGynDMMtRXF4ye9p1VZ7tKIaSsHfHlFI0scfZnn7kwyYXQnwmboFQZSqAZQBAEAQBAEAQBAEAQBAEBTKA0Gs3SNt0fBngMo7zHhg/zXH805rTrb1nk6Xi1F3PP1wRWoDY6Gma1+8nFI9vEDg5wPZsuBbiNMEn3lv9kv2OxXmVs211wTyymR1spjPnvDE3OefLqvW6Jyenhv7wjzmpUVdPb1kzXODQSdgFtGAwX3q2sfwOrIQRz9bOFOCnyR+zLjmZKwPicHsPJzTkFQX7PRAEBB+06+TUFJDb6R5jlqsmR7ThwjG2B4ZP81aKyamqscVtXsiOn9LCupG1lfL3FLkOHC5oDmZOcnPqlZTUrrysvgpqPTJs9PDXUVUJqYn/ABOIBwcSeHhxz26qpNlexbkzoGgb1JerKDUu46mmd3UjurtgQfeFSSwbunsc4c+iQVlQKaEvIyc4A81CWWZpy2rJFrZrihuFz9Bhe50hbxNBiLQ4eR+qvsXo1oajLJc1wc0OHIjIWM2y5AEAQBAEAQBAUOwQFN3exAAxvggPOQ920uAOB4FEVbwY5lhquKCZrXxvGCD1UWVRnFxksoQtcZKSZrnaVt5JLXTsBPJrxj5hcl+F0z6yjpryl6WODeMHA0DJOBjJXVisLBzuyJ6kramtuItlHnA2cAccTue/kFkRrWycpbUaOst1XRPjZPCQZNmcJBDvgmTDKDj2Z1FNV6fuTY6gBsbsGRnECC3PP2oXi3XLknjSC0EciFU3CqA5h2t0r23Ghqznu3xGLP8AqBJ/gfkrwZz9YvxJltqdRX7TbLXLOIJGuYMxsDQH5OABn1s/NZOykcThtbGo6mitOl4bJSVPfyOyOIBrhs48Wf1TnPToq9smxqFew2nZLSvjttdVOyGTTBrM9eEbn4n5KkuzNpE9rZNK6A1EPC0gOByM8kjLazZnHciF2TQzbdeX1zHPxwlkbHYwwHnv1Kybork1YUNMnbGhrQ0dBhYTd6LkAQBAEAQBAEBad3Y96A0ettQM0zp2ouZj72RhayKP9Z7jgZ8hzPkCiWQcRs191RqrUtLSyX2uiM8hdJJT+q2CMbl3CNg0ct/LdX4RTs6joHUtbU3Ws07fJ4Z7jSx99HPE9rjJFnGHlu3GMtzjxCqyyZOXNa77QB9qgkoJY+XG3PLGUwRlGJcLvbLc0vuFxpKVo3Jnnaz+JTBJwq+60rPyurfR+7lofSixrIsOMjc4y1w556dFkRglXF8nUJrlbYX07qYyyxwRmOKLHD3Z/XBI3KryY3KCxg1Or7tQNjNZHxmOGDD3HOXY5Aef1UoibU5LBCpe0zU8z2zMuNJQQf5UAp2yZHnnf35CYMzsa4ism3h7Wru2RsppKCqgY0d7HHxxyEdSMkptIVrTxJYJtqeUal0XFUWilkq/S+CSHhAzH1JOeRAyPeoXDGoi5Qwkc+bpXUIcC201QI5EYGPmr5Rz/hs/4nvBp2Giqovyou1BaWPOe7qKlglePIZ+ZUOX0ZoaWb/Nwdbsv9ntt1PHaJYZaSNgbG6CQPaR7QTn2qjN+KjFYj0Z4IKgsai5ahoqGV0R45ZG/abHjb3qcGKVsYnnQaloaqVsTw+B7jhveYwT7UwRG6MmbvKgzFcoAgCAIAgCAtH2yhBFe06xVGoNJz0tEHOqYntmjY3m/hO7RnbJaTjPXClPkNHGtQ3e10Vkit2nYDb3VfEbpFI9zphg4bG97gMDG5aNs+KsuyHwSvsN03VRV89+niMNL3DqemBbjvOJzS5w8hwgZ65Pgokwjq1VUSNc+MjDTycpil2Y5yfRgvcWsc4AktBIHirmE+bblcKqtr5q6uDXVE0hcZJI25Plkjl09yqn9GZxxy8lbfWmjqo6tsLWyQYlGGDD29Rj2HYoRKOOM9nc3aYuPF6oicDydx4VcmL4ZkE7TY6ijqKewxtL5ZGColeNmcOSA0HryJJ9ilcl8KrmRobVoi518bJ5pI6eJwy0u9ZxHTb6rWs1cIPauWdLT6KVsVLOE+ST1ukqGmsJbAM1VMx0jJz9px5kHxB8Fqw1M3Zn7N27R1OjYl1795N/2UaopoqeDS1Y0xVcZe6lk/QnZkuxno4ZIx1xnyXSkjiVWKcck51XcZLPpq53GBrXS01M+Rgdy4gNs+WVVGQ+Y/SKmrnnrKmR9TWzPaDK/d7nOzv7dtscuiyZwYmt0lH7N9bNJasqqmKng7+i9IPCZTVBoZnqQ12dvBYf4ipvCfJtfwlsFu28H0JcJH0VomkjJL4ovVPnjGVZGGbxFs58InvjMocMF/DlzhnJ/rmrmhh9l0lNIwSl/BiJ4a7Dwd/LxQlxZOtO1ElVZoHyE8YBbxeODhVZuVvMEZJlmZOGSEcJPPkpwsDLTwZTXeOyqZC5AEAQBAWcn+0ICkzS+MtDnNyObeYUNZRKeHkjNypw2Y1dyslBVOi/z5IGEgeIcckLUnfbUnKS4RuwootaUZcs3dsuNLXx5pnAcPNmMFqtptXVqFmDyYL9PZQ8TRmlrXDBAI8wto1+GW9zGDkRsB8eEKcsjbH6OdzQ2900kUMMAj43OjiPCSG8RwcdAuVcpRm2d3SWRnTE1VZps3Cvd6Fa2TufBwZZwsEZBOC4nbG489jstzQ2La0zkeYptlZGcOsHV6dsjII2zO4pA0B7vE43K2DEjjva/dY49X0dNLCWNho/8Yj7XG7O3s4fmrxMGog5R4NrYa2Grs1NPHK1zWxhrnA8i0YOVx9RFxtkvs9Dop500HL0uf7LBialvFPT2KaSCZj3TN7qItcDudifYBk+5Xppk7Emimo1dfwuUJJ56wa/sqp6a4a3dUyvH9zou9p4+ry4gF3uBx/5BdWTODRXsjhnaK2mirKSamqIxJDMwxyMPJzSMEKhsHGYdG1On6qakNIZC2cOpq0vbgsByHEZzkcjtzHmoturjBqXbMMdLqbLlKvpMk5roqKoie6WMSj12RueAXY3OFyqU3NNHotTOMapZfons8UdXSvifnglYQduhC6xwmsrBzSVojmeziaeFxbkcjgq5z2elFRVFdMIqWMvOcE9G+0oTGDk8I6LbKRtDQxUzTkRtxnxPU/FUN6MdqwZJa13NoOPEITg8/Va0gbeCA9UJCAIAgLX7DPggKBxI+z80IyUc1srXNe3LTsQeqhpSWGSm08ohVzoKixVramjc4Qk+o4dP9J8l5bVaa3Q2qyp8ev9M9Bp74ayt12Ln/3KJDZr7BXtEb//AM6nqw8j7F2NF5GvULD4l9f6OZqtDOh5XMTave1rCXHhAG5PRdFtJZZpJZeEQi8VNnq6l8tHSMZWkcHpgjaCRnJHic7riXeTotl8az+vo7Wk0VtP43j9C60XSK0vk7xr5GyAZwd8jqoXkK9NLEuc/Rk1GklqEtvGCUW+7UlxBFM88YGSx4wQulptbTqOIPn6OTfpbKPzo5p2y00t7udtt1BDG6WmjfJNM9wHCHEANz7ifgt6JpTsinhmt0bp6rs7Kp0tYCZuECOPJaCM5JzzPL4Ln62ayoo63i1mMp44fBj6x0vVXOaCopahg7uPg4JNm887Y5fBX0dmU0Y/JpQcZpcdGhtf9paV1HZq57OFzZmQScLstcwu4cbeLT8WreObGcZdH0RXXGloW8VTIG55N5k+5ad+qq06zY8G1TRZc8QRFb3dIru+JtP3sbYs4ccAnOPoua9dDUyxBdfZ2NNpZ6dNy5yayGf0KqZMYaeomZux8seTH44wVq366emklD39meWmhqI88EjtepfSZBBUQhr3fZLTsfJbmg8otRZ8diw2czW+PdEPkg8pdm3jioJWl3o8G3PMbV2cM5acH0ZUTY2tAjDQ3oGjZQWWPR6ISUQFob63EPchBehIQBAEBb+njyQgFu+QcFCSoHjzQHnUQxzwuilaHMcMFp6qk64zi4yWUy0ZOD3RfJDbvp2elLpaTMsHPhH2m/Vea1virKszq5X7r/Z3dL5GFn4bOH+xrJ7jVywCGapkdFnHA4/xXPs1d84/HObaN2OmpjLfGKyYy1zOFAL4rr/Yz/TgM92D6v62ei6Pit/8XHZ/f9Dn+UlCGllKfrr9TU2V8lQyorJ3l808xc956n+ivaM8RDL5ZtYpXRbNGR4LXuojby+Gb+l1s9OmlyhLK6X7WPYFNNMa1wV1OsnqWt3CXo1F4kFNPSVLomzBkocY38ncJDh8ws6NJycWmjby1ZuLxWOkMnfesHHw8PdyXhNbGyOokrXye90VldlEZV9YKAkHIWsm48o2nyM5RtvlgNcWODmnDmnI9qmMpQkpR7RWUVJbX0TWkLqmmjnjjcWyNB2C9/RdG2tWL2eItplVY4P0ZtM6eMtYIjw56hXlgiDkuMGfjPNUM5Thb4IC5AEAQBAEBaW5OQcICEdrOoLnp6w0s9pcI5ZagRvlwCWjBO2QRvhSiGcp/OVqz96v+6j/AAq+ERkfnK1Z+9X/AHUf4VGEMmRbu0zU7bhTGpuLpIe9bxsMcYBGd/0UaQydru1horpF3waYpSONskZxnqMjquZqvH03ZljEvs39Nr7aOFyvpkI5bLx7WGemCgEM1dejBPHStj4gwknfG69b4fS/HX8z7l/g8v5a6Oou+Jflj/n/AKNTT6rrKaPu4BwtznGx/kuwcxUwXSPT8s7j4j4N/ChPxRH5Z3HxHwb+FB8UTxqtU1dUwMnHE1pyPsj+SEOmD7RING3z0xz6OVoYGDMZyOpJI+a4Pm9Juir49rv9PR2fEXqqXwen1+vsla8weiCAICLah1vfLPXegWuudDDGM8IYw7nc8wV7HxENukjn3k8x5KedS0vRq/zl6s/er/uo/wAK6mEaOSv5ytWfvV/3Uf4VGEMky7KtaX++amkoLnP6TTGmdIXOY1pjc0tA5Ac8n4KGgjrqqWCAIAgCAICE9sdGarQVc9o9amkinHkA8B3/AMlymPZDPncnnjdXKk51XpvT1v0Xa7tarh3lZO5jZGOkDu9y0l2G/olpH9HChZBBwdwpB9QaWr/TtH26sccl1G3jP+oNwfmCsNj2xbMkFlpEJznfxXgW88nsiyYvbE4xML5APVaOpV6YKyyMJPCbMV85QrlKKy0ujnOqqOphZFLUwysdxkOc9hGSf+F7+LhhKPo8JRGyM5fIuX9keCsbRUAnAAyScABAU6kYxg4I8CgCAk+kaWaSKaWKmlkPGAHxNyW4/wCeSx27JQcZvhmGXyq2Mqk208k6o3OxwuOW82n+S8LfXslxyvs94pboqWMP6MlYAe9HTSVlQ2CHHeOB4QeRIGcfJZ9PS7rFBezFdaqob5dHHdQTmovFVJ/3MfBe409fxUxh9JHk7577ZS+2bvs2sVpv99lpr3UmKCOAyNYJO7MjsgY4vLOVlZiRor1BSU14rYLdMZ6OKd7IZSclzQdj5+1SDpnYFR8VVeK4jZjY4WnzOXH+A+KrIlHZFUsEAQBAEAQGu1FQi52G4UJbxekUz4wPElpRA+WjQ1zSWy0FW142c0wPyD8FkKFPQaoHPoVT9w76IAaKs/Y6r7h/0QHTNI9oMNk0qyz11pu8s8Ye1r4qYluDuP4rFbByi0vZlrkoyTZhR6whLmtNqurQSBk0xwF5l+DvS/MuDvLytTeMMlLY5QQ4RSbHP2SuUozi87WdDdFrsxO0GmFZpKqIBBi4ZRtuMEfyyvVaSa3xkvZxNXD+U19HHF1jjm/0JeqPT+p6e5XCmdPTsa5pDQC5hI2eAeo5e9GCmub1Sag1LU3GgpjTwSNa0BwAc8gbuOOpUIGhUg7P2eUMsGj6IMYZJJmvnPCN/WcSPlhcrV7nOTis4OtpHGNSy+zIpKSmjZxTOqA97vVbwHbz5f1hcKuiDq/nZT/Q7Fls5S/BjBor3qGC1XB9I2huNQWgEujpiRv0WWvxE7o765LH9cmrZ5GFctk1z/QxqPXUdLUtnZaLtxMB4f7seZBAW3o/EXU3xsclhGtqfI120ygk8s58+krHPc40dVkn/oP+i9EcQtNFVnnRVJ/9DvogK+h1f7HVfcO+iA7v2LWuS3aQMs8L4paypfMRI0gkYDRsfJvzVJdlkT9QSEAQBAEAQFCMoBhAMIBhAEAwgGEGDRassoutorIoxmWSB8eP1stKwzqzJSXZnqt2xcH0z5g9YbPaQ4bEHmCto1RlAMoChBdswEuOwA5koD6l03Z22m2U0DgO9ZC1jsdMDkFrV17W5PtmxbZvSiukbgBZTDgY3UYJKqQUwgGEAwgGEBVAEAQBAEAQBAEAQBAEAQBAUO4wgINUdk+kqiolnfSVTXSPLyG1cgGScnAymQWfmh0h+zVn+8k+qnIwPzQ6Q/Zqz/eSfVMjBfT9k+kqeoinZSVTnRPDwH1chBI3GRndMsYJ0oAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEB//9k="
        alt="Delicious Salad"
        className="salad-image"
      />
    </div>
  );
};

export default About;