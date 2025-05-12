package com.example.mywebsite.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class ProductController {
    @GetMapping("/api/products")
    public List<Map<String ,Object>> listProducts(){
        return List.of(
                Map.of("id",1,"name","寒冰射手 艾希","price",3200,"image","https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg"),
                Map.of("id",1,"name","德玛西亚之力 盖伦","price",3200,"image","https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg"),
                Map.of("id",1,"name","九尾妖狐 阿狸","price",3200,"image","https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg")
        );
    }
}
